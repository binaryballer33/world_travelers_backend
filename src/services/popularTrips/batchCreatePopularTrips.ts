import prisma from '..'
import { PopularTrip } from '../../models'

const batchCreatePopularTrips = async (popularTrips: PopularTrip[]) => {
  // create all the vacation packages in the database
  return await prisma.popularTrip.createMany({
    data: popularTrips,
  })
}

export default batchCreatePopularTrips
