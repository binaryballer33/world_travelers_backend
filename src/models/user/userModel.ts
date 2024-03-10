import { z } from 'zod'
import { TripSchema } from '../trips/tripModel'
import { CartItemSchema } from '../cartItem/cartItemModel'

export const UserLoginCredentialsSchema = z.object({
  email: z.string().email('Invalid Email Format').min(1, 'Email Must Be At Least 1 Character'),
  password: z.string().min(8, 'Password Must Be At Least 8 Characters'),
})

/* for updating user information, you can use the UserSchemaOptional type
 * to make sure that the user can update any of the fields without having to
 * update all of the fields.
 */
export const UserSchemaOptional = z.object({
  email: z.string().email('Invalid Email Format').optional(),
  firstName: z.string().min(1, 'First Name Must Be At Least 1 Character').optional(),
  lastName: z.string().min(1, 'Last Name Must Be At Least 1 Character').optional(),
  password: z.string().min(8, 'Password Must Be At Least 8 Characters').optional(),
})

// create user type using zod and infer it
export const UserSchema = z.object({
  email: z.string().email('Invalid Email Format'),
  firstName: z.string().min(1, 'First Name Must Be At Least 1 Character'),
  lastName: z.string().min(1, 'Last Name Must Be At Least 1 Character'),
  password: z.string().min(8, 'Password Must Be At Least 8 Characters'),
})

export const UserSchemaWithCartAndTrip = UserSchema.extend({
  trips: TripSchema.array(),
  cart: CartItemSchema,
})

type User = z.infer<typeof UserSchema>

// add id to user type so you can create tokens that will hold the data for the req.user object
export const UserSchemaWithId = UserSchema.extend({
  id: z.string().uuid('Invalid UUID'),
})

export type UserLoginCredentials = z.infer<typeof UserLoginCredentialsSchema>
export type UserOptional = z.infer<typeof UserSchemaOptional>
export type UserWithId = z.infer<typeof UserSchemaWithId>
export type UserWithCartAndTrip = z.infer<typeof UserSchemaWithCartAndTrip>
export default User
