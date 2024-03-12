import prisma from '..'

/* Will Remove All Items From The Cart*/
const deleteAllCartItemsByCartId = async (cartId: string) => {
  return await prisma.$transaction(async (tx) => {
    const deletedCartItemCount = await prisma.cartItem.deleteMany({
      where: {
        cartId,
      },
    })

    // update the cart total
    await tx.cart.update({
      where: { id: cartId },
      data: {
        total: 0,
      },
    })

    return deletedCartItemCount
  })
}

export default deleteAllCartItemsByCartId
