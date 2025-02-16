/* eslint-disable prettier/prettier */
import { z } from 'zod'

// TODO: Add the fields you need to the Thread schema
export const threadSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  createdBy: z.string(),
})
export type Thread = z.infer<typeof threadSchema>

// ? These schemas are provided for you, but you may need to add more fields to them
export const threadCreateSchema = threadSchema.omit({ id: true, createdAt: true })
export type ThreadCreate = z.infer<typeof threadCreateSchema>

export const threadUpdateSchema = threadSchema.omit({ id: true, createdAt: true, createdBy: true })
export type ThreadUpdate = z.infer<typeof threadUpdateSchema>


