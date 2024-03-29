import { z } from 'zod'

export const CartSchema = z.object({
  id: z.string().uuid(),
  total: z.number().int().positive().optional(),
})

type Cart = z.infer<typeof CartSchema>
export default Cart
