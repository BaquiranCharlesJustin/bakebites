import prisma from "../../lib/prisma";

// api/cakes
export default async function handler(req, res) {
  const { id, productType, count, userSession } = req.body;
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
