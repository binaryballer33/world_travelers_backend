import prisma from '..'

const deleteCartByUserId = async (userId: string) => {
  return await prisma.cart.delete({
    where: {
      userId,
    },
  })
}

export default deleteCartByUserId
