import prisma from '..'

const deleteCart = async (userId: string) => {
  return await prisma.cart.delete({
    where: {
      userId,
    },
  })
}

export default deleteCart
