import prisma from '..'

const deleteTrip = async (tripId: string) => {
  // delete the trip from the db and return the trip, try catch block is not necessary here
  return await prisma.trip.delete({
    where: {
      id: tripId,
    },
  })
}

export default deleteTrip
