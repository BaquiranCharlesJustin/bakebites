import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { cakeId } = req.query;
  const cakeById = await prisma.post.findUnique({
    where: {
      id: parseInt(cakeId),
    },
  });

  if (cakeById) return res.status(200).json(cakeById);
  return res.status(404).json({ error: "Data Not Found" });
}
