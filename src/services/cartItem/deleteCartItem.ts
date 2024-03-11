import prisma from '..'

/* Will Remove Item From The Cart*/
const deleteCartItem = async (cartItemId: string) => {
  return await prisma.cartItem.delete({
    where: {
      id: cartItemId,
    },
  })
}

export default deleteCartItem
