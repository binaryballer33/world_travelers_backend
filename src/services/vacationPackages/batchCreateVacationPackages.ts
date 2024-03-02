import prisma from '..'
import { VacationPackage } from '../../models'

const batchCreateVacationPackages = async (vacationPackages: VacationPackage[]) => {
  try {
    const vacationPackagesCreated = await prisma.vacationPackage.createMany({
      data: vacationPackages,
    })

    return vacationPackagesCreated
  } catch (error) {
    throw error
  }
}

export default batchCreateVacationPackages
