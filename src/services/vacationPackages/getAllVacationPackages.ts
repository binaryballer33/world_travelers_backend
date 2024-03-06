import prisma from '..'

const getAllVacationPackages = async () => {
  return await prisma.vacationPackage.findMany() // get all vacation packages from the database
}

export default getAllVacationPackages
