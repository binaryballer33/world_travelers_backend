import prisma from '..'

/* Will Get Cart Item From The Cart Using It's Id */
const getCartItemById = async (cartItemId: string) => {
  return await prisma.cartItem.findUnique({
    where: {
      id: cartItemId,
    },
  })
}

export default getCartItemById
