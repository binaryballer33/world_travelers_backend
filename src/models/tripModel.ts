import { z } from 'zod'

// create trip type using zod and infer it
export const TripSchema = z.object({
  name: z.string().min(1, 'Name Must Be At Least 1 Character').optional(),
  city: z.string().min(1, 'City Must Be At Least 1 Character'),
  state: z.string().min(1, 'State Must Be At Least 1 Character').optional(),
  country: z.string().min(1, 'Country Must Be At Least 1 Character'),
  startDate: z.string().min(1, 'Start Date Must Be At Least 1 Character'),
  endDate: z.string().min(1, 'End Date Must Be At Least 1 Character'),
  imageUrl: z.string().min(1, 'ImageUrl Must Be At Least 1 Character').optional(),
  userId: z.string().min(1, 'UserId Must Be At Least 1 Character'),
})

type Trip = z.infer<typeof TripSchema>

export default Trip
