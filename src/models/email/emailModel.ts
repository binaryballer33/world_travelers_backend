import { z } from 'zod'

// create trip type using zod and infer it
export const EmailSchema = z.object({
  from: z.string().min(1, 'From field cannot be empty.'),
  to: z.string().min(1, 'To field cannot be empty.'),
  subject: z.string().min(1, 'Subject field cannot be empty.'),
  html: z.string().min(1, 'Html field cannot be empty.'),
})

type Email = z.infer<typeof EmailSchema>

export default Email
