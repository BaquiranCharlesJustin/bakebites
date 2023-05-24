import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  console.log(req.query)
  const { userSession } = req.query;
  const userSessions = await prisma.cart.findUnique({
    where: {
      userSession: userSession,
    },
  });

  if (userSessions) return res.status(200).json(userSessions);
  return res.status(404).json({ error: "Data Not Found" });
}
