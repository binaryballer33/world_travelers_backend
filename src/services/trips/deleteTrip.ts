import prisma from '..'

const deleteTrip = async (tripId: string) => {
  try {
    // delete the trip from the db and return the trip
    const tripDeleted = await prisma.trip.delete({
      where: {
        id: tripId,
      },
    })
    return tripDeleted
  } catch (error) {
    throw error
  }
}

export default deleteTrip
