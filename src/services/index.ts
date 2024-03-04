import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/* EXPORTING USER SERVICES */
export { default as findUserByEmail } from './user/findUserByEmail'
export { default as createUser } from './user/createUser'
export { default as updateUser } from './user/updateUser'

/* EXPORTING TRIPS SERVICES */
export { default as createTrip } from './trips/createTrip'
export { default as getTripsByUserId } from './trips/getTripsByUserId'
export { default as updateTrip } from './trips/updateTrip'
export { default as deleteTrip } from './trips/deleteTrip'

/* EXPORTING VACATION PACKAGE SERVICES */
export { default as batchCreateVacationPackages } from './vacationPackages/batchCreateVacationPackages'

/* EXPORTING PRISMA CLIENT */
export default prisma
