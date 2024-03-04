import prisma from '..'
import { Trip } from '../../models'

const updateTrip = async (tripId: string, trip: Trip) => {
  // update and return the trip data, try catch block is not necessary here
  return await prisma.trip.update({
    where: {
      id: tripId,
    },
    data: {
      ...trip,
    },
  })
}

export default updateTrip
