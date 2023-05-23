import prisma from "../../../lib/prisma"

// api/cakes
export default async function handler(req,res){
    const cupcakes = await prisma.cupcake.findMany()

    if(cupcakes) return res.status(200).json(cupcakes)
    return res.status(404).json({error: "Data Not Found"})
}