import prisma from '..'
import { Cart } from '../../models'

const updateCartTotal = async (cart: Cart, amountToAdd: number) => {
  return await prisma.cart.update({
    where: {
      id: cart.id,
    },
    data: {
      total: cart.total! + amountToAdd,
    },
  })
}

export default updateCartTotal
