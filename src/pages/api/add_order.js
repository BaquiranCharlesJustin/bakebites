import prisma from "../../lib/prisma";

// api/cakes
export default async function handler(req, res) {
  const { name, contactNumber, date, time, location, ordersa, mode, userSession } = req.body;
  const result = await prisma.orderSummary.create({
    data: {
      name: name,
      contactNumber: contactNumber,
      date: date,
      time: time,
      location: location,
      mode: mode,
      order: ordersa,
      userSession: userSession
    },
  });
  res.json(result);
}
