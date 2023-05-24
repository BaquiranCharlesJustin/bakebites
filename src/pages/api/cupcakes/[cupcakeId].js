import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { cupcakeId } = req.query;
  const cupcakeById = await prisma.cupcake.findUnique({
    where: {
      id: parseInt(cupcakeId),
    },
  });

  if (cupcakeById) return res.status(200).json(cupcakeById);
  return res.status(404).json({ error: "Data Not Found" });
}
