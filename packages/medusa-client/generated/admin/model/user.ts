/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { Address } from "./address"
import type { UserMetadata } from "./userMetadata"

/**
 * Represents a User who can manage store settings.
 */
export interface User {
  /** The unique id of the User. This will be prefixed with `usr_` */
  id?: string
  /** The email of the User */
  email?: string
  first_name?: string
  /** The Customer's billing address. */
  last_name?: Address
  created_at?: string
  updated_at?: string
  deleted_at?: string
  metadata?: UserMetadata
}