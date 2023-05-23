import prisma from "../../../lib/prisma"

// api/cakes
export default async function handler(req,res){
    const carts = await prisma.cart.findMany()

    if(carts) return res.status(200).json(carts)
    return res.status(404).json({error: "Data Not Found"})
}