import { z } from 'zod'

// create vacation package type using zod and infer it
export const PopularTripSchema = z.object({
  name: z.string().min(1, 'Name Must Be At Least 1 Character'),
  description: z.string().min(1, 'Description Must Be At Least 1 Character'),
  imageUrl: z.string().min(1, 'ImageUrl Must Be At Least 1 Character'),
  street: z.string().min(1, 'Street Must Be At Least 1 Character'),
  city: z.string().min(1, 'City Must Be At Least 1 Character'),
  state: z.string().min(1, 'State Must Be At Least 1 Character'),
  country: z.string().min(1, 'Country Must Be At Least 1 Character'),
})

type PopularTrip = z.infer<typeof PopularTripSchema>

export default PopularTrip
