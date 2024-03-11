import prisma from '..'

const getAllPopularTrips = async () => {
  return await prisma.popularTrip.findMany() // get all vacation packages from the database
}

export default getAllPopularTrips
