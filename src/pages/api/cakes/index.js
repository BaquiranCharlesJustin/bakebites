import prisma from "../../../lib/prisma"

// api/cakes
export default async function handler(req,res){
    const cakes = await prisma.cake.findMany()

    if(cakes) return res.status(200).json(cakes)
    return res.status(404).json({error: "Data Not Found"})
}