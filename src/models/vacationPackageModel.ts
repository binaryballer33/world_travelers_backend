import { z } from 'zod'

// create vacation package type using zod and infer it
export const VacationPackageSchema = z.object({
  name: z.string().min(1, 'Name Must Be At Least 1 Character'),
  description: z.string().min(1, 'Description Must Be At Least 1 Character'),
  city: z.string().min(1, 'City Must Be At Least 1 Character'),
  state: z.string().min(1, 'State Must Be At Least 1 Character'),
  country: z.string().min(1, 'Country Must Be At Least 1 Character'),
  price: z.number().min(1, 'Price Must Be At Least 1'),
  imageUrl: z.string().min(1, 'ImageUrl Must Be At Least 1 Character'),
})

type VacationPackage = z.infer<typeof VacationPackageSchema>

export default VacationPackage
