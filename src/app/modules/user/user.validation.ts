import { z } from 'zod'

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(30, { message: 'Password must be less than 30 characters' })
    .optional(),
})

export const userValidation = {
  userValidationSchema,
}
