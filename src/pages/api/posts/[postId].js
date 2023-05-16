import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { postId } = req.query;
  const postById = await prisma.post.findUnique({
    where: {
      id: parseInt(postId),
    },
  });

  if (postById) return res.status(200).json(postById);
  return res.status(404).json({ error: "Data Not Found" });
}
