import { z } from 'zod'

export const CartItemSchema = z.object({
  tripId: z.string().min(1, 'TripId Must Be At Least 1 Character'),
  cartId: z.string().min(1, 'CartId Must Be At Least 1 Character'),
  price: z.number().int().positive().optional(),
})
type CartItem = z.infer<typeof CartItemSchema>
export default CartItem
