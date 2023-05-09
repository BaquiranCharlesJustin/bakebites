import data from '../data'
// api/cakes
export default function handler(req,res){
    const { Cakes } = data;
    if(Cakes) return res.status(200).json(Cakes)
    return res.status(404).json({error: "Data Not Found"})
}