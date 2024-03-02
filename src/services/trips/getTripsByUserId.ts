import prisma from '..'

const getTripsByUserId = async (userId: string) => {
  try {
    // get all the trips for the specific userId and return the trips
    const trips = await prisma.trip.findMany({
      where: {
        userId,
      },
    })
    return trips
  } catch (error) {
    throw error
  }
}

export default getTripsByUserId
