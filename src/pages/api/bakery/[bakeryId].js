import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { bakeryId } = req.query;
  const bakeryById = await prisma.bakery.findUnique({
    where: {
      id: parseInt(bakeryId),
    },
  });

  if (bakeryById) return res.status(200).json(bakeryById);
  return res.status(404).json({ error: "Data Not Found" });
}
