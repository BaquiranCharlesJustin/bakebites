import prisma from "../../../lib/prisma"

// api/cakes
export default async function handler(req,res){
    const posts = await prisma.post.findMany()

    if(posts) return res.status(200).json(posts)
    return res.status(404).json({error: "Data Not Found"})
}