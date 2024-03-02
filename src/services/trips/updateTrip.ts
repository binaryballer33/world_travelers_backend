import prisma from '..'
import { Trip } from '../../models'

const updateTrip = async (tripId: string, trip: Trip) => {
  try {
    // update and return the trip
    const updatedTrip = await prisma.trip.update({
      where: {
        id: tripId,
      },
      data: {
        ...trip,
      },
    })
    return updatedTrip
  } catch (error) {
    throw error
  }
}

export default updateTrip
