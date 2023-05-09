import data from '../data'

export default function handler(req, res) {
    const { cakeId } = req.query;
    const { Cakes } = data;

    if(cakeId){
        const cake = Cakes.find( value => value.id == cakeId)
        return res.status(200).json(cake)
    }
    return res.status(400).json({error: "Post Not Found"})
}