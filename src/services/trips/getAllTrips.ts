import prisma from '..'

const getAllTrips = async () => {
  try {
    // get all the trips and return the trips
    const trips = await prisma.trip.findMany()
    return trips
  } catch (error) {
    throw error
  }
}

export default getAllTrips
