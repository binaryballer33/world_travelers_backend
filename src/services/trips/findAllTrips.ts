import prisma from '..'

const getAllTrips = async () => {
  return await prisma.trip.findMany()
}

export default getAllTrips
