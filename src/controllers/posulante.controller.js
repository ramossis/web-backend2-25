const Postulantes=require('../models/Postulantes')

const PostulantesContrtoller={}

PostulantesContrtoller.createPostulante=async(req,res)=>{
try {
    const postulanteData=req.body
    const result=await Postulantes.createPostulante(postulanteData)
    return res.status(201).json({message:'Postulante creado',data:result})   
} catch (error) {
    return res.status(500).json({message:'Error al crear postulante',error:error.message})
}
}
PostulantesContrtoller.getAllPostulantes=async(req,res)=>{
    try {
        const postulantes=await Postulantes.getAllPostulantes()     
        return res.status(200).json({data:postulantes})
    } catch (error) {
        return res.status(500).json({message:'Error al obtener postulantes',error:error.message})
    }       
}
module.exports=PostulantesContrtoller