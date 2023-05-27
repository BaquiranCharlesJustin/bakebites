import prisma from "../../lib/prisma";

// api/cakes
export default async function handler(req, res) {
  const { id, productType, count, userSession } = req.body;
  const existingProduct = await prisma.cart.findFirst({
    where: {
      userSession: userSession,
      productId: id,
    },
  });
  if (existingProduct) {
    const result = await prisma.cart.update({
      where: { id: existingProduct.id },
      data: { amount: existingProduct.amount + 1 },
    });
    res.json(result);
  } else {
    const result = await prisma.cart.create({
      data: {
        productId: parseInt(id),
        productType: productType,
        amount: parseInt(count),
        userSession: userSession,
      },
    });
    res.json(result);
  }
}
