import { z } from 'zod'

// create user type using zod and infer it
export const UserSchema = z.object({
  email: z.string().email('Invalid Email Format'),
  firstName: z.string().min(1, 'First Name Must Be At Least 1 Character'),
  lastName: z.string().min(1, 'Last Name Must Be At Least 1 Character'),
  password: z.string().min(8, 'Password Must Be At Least 8 Characters'),
})

type User = z.infer<typeof UserSchema>

// add id to user type so you can create tokens that will hold the data for the req.user object
export const UserSchemaWithId = UserSchema.extend({
  id: z.string().uuid('Invalid UUID'),
})

export type UserWithId = z.infer<typeof UserSchemaWithId>

export default User
