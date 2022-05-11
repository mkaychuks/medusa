import { EntityManager } from "typeorm"
import { MedusaError } from "medusa-core-utils"

import { BatchJob } from "../models"
import { BatchJobRepository } from "../repositories/batch-job"
import { FilterableBatchJobProps } from "../types/batch-job"
import { FindConfig } from "../types/common"
import EventBusService from "./event-bus"
import { TransactionBaseService } from "../interfaces/transaction-base-service"
import { buildQuery, validateId } from "../utils"

type InjectedDependencies = {
  manager: EntityManager
  eventBusService: EventBusService
  batchJobRepository: typeof BatchJobRepository
}

class BatchJobService extends TransactionBaseService<BatchJobService> {
  protected manager_: EntityManager
  protected transactionManager_: EntityManager | undefined

  protected readonly batchJobRepository_: typeof BatchJobRepository
  protected readonly eventBus_: EventBusService

  static readonly Events = {
    CREATED: "batch.created",
    UPDATED: "batch.updated",
    COMPLETED: "batch.completed",
    CANCELED: "batch.canceled",
    COMPLETE_BATCH_JOB: "batch-process.complete",
  }

  constructor({
    manager,
    batchJobRepository,
    eventBusService,
  }: InjectedDependencies) {
    // eslint-disable-next-line prefer-rest-params
    super(arguments[0])

    this.manager_ = manager
    this.batchJobRepository_ = batchJobRepository
    this.eventBus_ = eventBusService
  }

  async retrieve(
    batchJobId: string,
    config: FindConfig<BatchJob> = {}
  ): Promise<BatchJob | never> {
    return await this.atomicPhase_(async (manager) => {
      const batchJobRepo: BatchJobRepository = manager.getCustomRepository(
        this.batchJobRepository_
      )

      const validatedId = validateId(batchJobId)
      const query = buildQuery({ id: validatedId }, config)
      const batchJob = await batchJobRepo.findOne(query)

      if (!batchJob) {
        throw new MedusaError(
          MedusaError.Types.NOT_FOUND,
          `Batch job with id ${batchJobId} was not found`
        )
      }

      return batchJob
    })
  }

  async confirm(batchJobId: string): Promise<BatchJob> {
    return await this.atomicPhase_(async (manager) => {
      const result = await this.retrieve(batchJobId)

      await this.eventBus_
        .withTransaction(manager)
        .emit(BatchJobService.Events.COMPLETE_BATCH_JOB, {
          id: result.id,
        })

      return result
    })
  }

  async listAndCount(
    selector: FilterableBatchJobProps = {},
    config: FindConfig<BatchJob> = { skip: 0, take: 20 }
  ): Promise<[BatchJob[], number]> {
    return await this.atomicPhase_(
      async (
        transactionManager: EntityManager
      ): Promise<[BatchJob[], number]> => {
        const batchJobRepo = transactionManager.getCustomRepository(
          this.batchJobRepository_
        )

        const query = buildQuery(selector, config)
        return await batchJobRepo.findAndCount(query)
      }
    )
  }
}

export default BatchJobService
