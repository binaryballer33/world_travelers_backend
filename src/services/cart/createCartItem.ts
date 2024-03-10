import prisma from '..'
import { Cart } from '../../models'
import { TripWithTripId } from '../../models/trips/tripModel'

/*
 * create a new cart item and update the cart total, if one of the operations fails, the entire transaction * * will be rolled back
 *
 * @param cart - the cart to add the item to
 * @param trip - the trip to add to the cart
 *
 * @returns the created cart item
 */
const createCartItem = async (cart: Cart, trip: TripWithTripId) => {
  return await prisma.$transaction(async (tx) => {
    // create a new cart item
    const createdCartItem = await tx.cartItem.create({
      data: {
        cartId: cart.id,
        tripId: trip.id,
      },
    })

    // update the cart total
    await tx.cart.update({
      where: { id: cart.id },
      data: {
        total: cart.total! + trip.price,
      },
    })

    return createdCartItem
  })
}

export default createCartItem
