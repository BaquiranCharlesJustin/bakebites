import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { userSession } = req.query;
  const userSessions = await prisma.cart.findMany({
    where: {
      userSession: userSession,
    },
  });
  
  if (userSessions) return res.status(200).json(userSessions);
  return res.status(404).json({ error: "Data Not Found" });
}
