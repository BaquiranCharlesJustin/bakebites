import prisma from "../../lib/prisma";

// api/cakes
export default async function handler(req, res) {
  const { id, name, count, userSession } = req.body;
  const result = await prisma.cart.create({
    data: {
      productId: parseInt(id),
      productType: name,
      amount: parseInt(count),
      userSession: userSession,
    },
  });
  res.json(result);
}
