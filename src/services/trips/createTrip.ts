import prisma from '..'
import { Trip } from '../../models'

const createTrip = async (trip: Trip) => {
  try {
    // create and return the trip
    const tripCreated = await prisma.trip.create({ data: trip })
    return tripCreated
  } catch (error) {
    throw error
  }
}

export default createTrip
