import prisma from '..'

/* Will Remove All Items From The Cart*/
const deleteAllCartItemsByCartId = async (cartId: string) => {
  return await prisma.cartItem.deleteMany({
    where: {
      cartId,
    },
  })
}

export default deleteAllCartItemsByCartId
