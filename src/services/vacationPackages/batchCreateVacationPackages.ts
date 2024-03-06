import prisma from '..'
import { VacationPackage } from '../../models'

const batchCreateVacationPackages = async (vacationPackages: VacationPackage[]) => {
  // create all the vacation packages in the database
  return await prisma.vacationPackage.createMany({
    data: vacationPackages,
  })
}

export default batchCreateVacationPackages
