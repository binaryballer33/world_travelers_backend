import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/* EXPORTING USER SERVICES */
export { default as createUser } from './user/createUser'
export { default as findUserByEmail } from './user/findUserByEmail'

/* EXPORTING TRIPS SERVICES */
export { default as createTrip } from './trips/createTrip'
export { default as getAllTrips } from './trips/getAllTrips'
export { default as getTripsByUserId } from './trips/getTripsByUserId'
export { default as updateTrip } from './trips/updateTrip'
export { default as deleteTrip } from './trips/deleteTrip'

/* EXPORTING VACATION PACKAGE SERVICES */
export { default as batchCreateVacationPackages } from './vacationPackages/batchCreateVacationPackages'

/* EXPORTING PRISMA CLIENT */
export default prisma
