import prisma from '..'
import { Trip } from '../../models'

const createTrip = async (trip: Trip) => {
  // create and return the trip, try catch block is not necessary here
  return await prisma.trip.create({ data: trip })
}

export default createTrip
