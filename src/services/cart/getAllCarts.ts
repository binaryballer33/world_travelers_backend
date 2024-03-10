import prisma from '..'

const getAllCarts = async () => {
  return await prisma.cart.findMany()
}

export default getAllCarts
