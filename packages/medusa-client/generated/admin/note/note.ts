/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type {
  PostNotes200,
  PostNotesBody,
  GetNotes200,
  DeleteNotesNote200,
  GetNotesNote200,
  PostNotesNote200,
  PostNotesNoteBody,
} from ".././model"
import { getClient } from "../../../src/custom-instance"

/**
 * Creates a Note which can be associated with any resource as required.
 * @summary Creates a Note
 */
export const postNotes = (postNotesBody: PostNotesBody) => {
  return getClient<PostNotes200>({
    url: `/admin/notes`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postNotesBody,
  })
}
/**
 * Retrieves a list of notes
 * @summary List Notes
 */
export const getNotes = () => {
  return getClient<GetNotes200>({ url: `/admin/notes`, method: "get" })
}
/**
 * Deletes a Note.
 * @summary Deletes a Note
 */
export const deleteNotesNote = (id: string) => {
  return getClient<DeleteNotesNote200>({
    url: `/admin/notes/${id}`,
    method: "delete",
  })
}
/**
 * Retrieves a single note using its id
 * @summary Get Note
 */
export const getNotesNote = (id: string) => {
  return getClient<GetNotesNote200>({
    url: `/admin/notes/${id}`,
    method: "get",
  })
}
/**
 * Updates a Note associated with some resource
 * @summary Updates a Note
 */
export const postNotesNote = (
  id: string,
  postNotesNoteBody: PostNotesNoteBody
) => {
  return getClient<PostNotesNote200>({
    url: `/admin/notes/${id}`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postNotesNoteBody,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type PostNotesResult = NonNullable<AsyncReturnType<typeof postNotes>>
export type GetNotesResult = NonNullable<AsyncReturnType<typeof getNotes>>
export type DeleteNotesNoteResult = NonNullable<
  AsyncReturnType<typeof deleteNotesNote>
>
export type GetNotesNoteResult = NonNullable<
  AsyncReturnType<typeof getNotesNote>
>
export type PostNotesNoteResult = NonNullable<
  AsyncReturnType<typeof postNotesNote>
>