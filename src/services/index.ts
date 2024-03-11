import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/* EXPORTING USER SERVICES */
export { default as getUserByEmail } from './user/getUserByEmail'
export { default as getUserById } from './user/getUserById'
export { default as createUser } from './user/createUser'
export { default as updateUser } from './user/updateUser'
export { default as deleteUser } from './user/deleteUser'

/* EXPORTING TRIPS SERVICES */
export { default as createTrip } from './trips/createTrip'
export { default as getAllTrips } from './trips/findAllTrips'
export { default as getTripsByUserId } from './trips/getTripsByUserId'
export { default as updateTrip } from './trips/updateTrip'
export { default as deleteTrip } from './trips/deleteTrip'

/* EXPORTING CART SERVICES */
export { default as createCart } from './cart/createCart'
export { default as getAllCarts } from './cart/getAllCarts'
export { default as getCart } from './cart/getCart'
export { default as updateCartTotal } from './cart/updateCartTotal'
export { default as deleteCart } from './cart/deleteCart'

/* EXPORTING CART ITEM SERVICES */
export { default as getCartItemById } from './cartItem/getCartItemById'
export { default as createCartItem } from './cartItem/createCartItem'
export { default as deleteCartItem } from './cartItem/deleteCartItem'
export { default as deleteAllCartItemsByCartId } from './cartItem/deleteAllCartItemsByCartId'

/* EXPORTING VACATION PACKAGE SERVICES */
export { default as batchCreatePopularTrips } from './popularTrips/batchCreatePopularTrips'
export { default as getAllVacationPackages } from './popularTrips/getAllVacationPackages'

/* EXPORTING PRISMA CLIENT */
export default prisma
