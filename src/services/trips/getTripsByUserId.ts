import prisma from '..'

const getTripsByUserId = async (userId: string) => {
  // get all the trips for the specific userId and return the trips, try catch block is not necessary here
  return await prisma.trip.findMany({
    where: {
      userId,
    },
  })
}

export default getTripsByUserId
