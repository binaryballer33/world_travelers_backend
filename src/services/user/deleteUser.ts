import prisma from '..'

// Deletes A User In The Database
const deleteUser = async (userId: string) => {
  // delete all the user's cart items and cart before deleting the user
  await prisma.cartItem.deleteMany({ where: { cart: { userId } } })
  await prisma.cart.delete({ where: { userId } })
  return await prisma.user.delete({ where: { id: userId } })
}

export default deleteUser
