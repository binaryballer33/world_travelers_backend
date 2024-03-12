import { z } from 'zod'

// create trip type using zod and infer it
export const TripSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  street: z.string().min(1, 'Street Must Be At Least 1 Character'),
  city: z.string().min(1, 'City Must Be At Least 1 Character'),
  state: z.string().optional(),
  country: z.string().min(1, 'Country Must Be At Least 1 Character'),
  startDate: z.string().min(1, 'Start Date Must Be At Least 1 Character'),
  endDate: z.string().min(1, 'End Date Must Be At Least 1 Character'),
  userId: z.string().min(1, 'UserId Must Be At Least 1 Character'),
  // so that it can be optional, allowing you to save unfinished trips to your saved trips
  price: z.number().positive().default(0),
})

export const TripWithTripIdSchema = TripSchema.extend({
  id: z.string().uuid(),
})

export const TripSchemaForCart = TripSchema.extend({
  price: z.number().positive(),
  cartId: z.string().min(1, 'CartId Must Be At Least 1 Character'),
})

export const TripSchemaNoUserId = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  street: z.string().min(1, 'Street Must Be At Least 1 Character'),
  city: z.string().min(1, 'City Must Be At Least 1 Character'),
  state: z.string().optional(),
  country: z.string().min(1, 'Country Must Be At Least 1 Character'),
  startDate: z.string().min(1, 'Start Date Must Be At Least 1 Character'),
  endDate: z.string().min(1, 'End Date Must Be At Least 1 Character'),
  // so that it can be optional, allowing you to save unfinished trips to your saved trips
  price: z.number().positive().default(0),
})

type Trip = z.infer<typeof TripSchema>
export default Trip
export type TripWithTripId = z.infer<typeof TripWithTripIdSchema>
export type TripNoUserId = z.infer<typeof TripSchemaNoUserId>
export type TripForCart = z.infer<typeof TripSchemaForCart>
