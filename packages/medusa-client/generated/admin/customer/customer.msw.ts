/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import { rest } from "msw"
import { faker } from "@faker-js/faker"

export const getPostCustomersMock = () => ({
  customer: faker.helpers.randomize([{}, undefined]),
})

export const getGetCustomersMock = () => ({
  customer: faker.helpers.randomize([{}, undefined]),
})

export const getGetCustomersCustomerMock = () => ({
  customer: faker.helpers.randomize([{}, undefined]),
})

export const getPostCustomersCustomerMock = () => ({
  customer: faker.helpers.randomize([{}, undefined]),
})

export const getGetCustomerGroupsGroupCustomersMock = () => ({
  customer: faker.helpers.randomize([{}, undefined]),
})

export const getCustomerMSW = () => [
  rest.post("*/admin/customers", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getPostCustomersMock())
    )
  }),
  rest.get("*/admin/customers", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetCustomersMock())
    )
  }),
  rest.get("*/admin/customers/:id", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetCustomersCustomerMock())
    )
  }),
  rest.post("*/admin/customers/:id", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getPostCustomersCustomerMock())
    )
  }),
  rest.get("*/admin/customer-groups/:id/customers", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getGetCustomerGroupsGroupCustomersMock())
    )
  }),
]