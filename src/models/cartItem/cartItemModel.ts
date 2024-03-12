import { z } from 'zod'
import { TripSchema } from '../trips/tripModel'
import { CartSchema } from '../cart/cartModel'

export const CartItemIdSchema = z.object({
  id: z.string().uuid().min(1, 'Cart Item Id Must Be At Least 1 Character'),
})

export const CartItemSchema = z.object({
  tripId: z.string().min(1, 'TripId Must Be At Least 1 Character'),
  cartId: z.string().min(1, 'CartId Must Be At Least 1 Character'),
  price: z.number().int().positive(),
})

export const CreateCartItemSchema = z.object({
  cart: CartSchema,
  trip: TripSchema.merge(CartItemIdSchema),
})

export type CreateCartItem = z.infer<typeof CreateCartItemSchema>
type CartItem = z.infer<typeof CartItemSchema>
export default CartItem
