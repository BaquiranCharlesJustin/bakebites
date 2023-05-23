import prisma from "../../../lib/prisma"

// api/cakes
export default async function handler(req,res){
    const bakerys = await prisma.bakery.findMany()

    if(bakerys) return res.status(200).json(bakerys)
    return res.status(404).json({error: "Data Not Found"})
}