// const connection=require('../config/db')

const Materias=require('../models/Materias')
const MateriaController={}

MateriaController.getAllMaterias=async(req,res)=>{
    try {
        const materias=await Materias.getAll()
        return res.status(201).json(materias)  
    }
catch (error) {
    return res.status(500).json({message:'Error al obtener las materias',error:error.message})   
}                
}
MateriaController.createMateria=async(req,res)=>{
    try {
        const data=req.body
        const result = await Materias.create(data)
        return res.status(201).json(result)
    } catch (error) {
        return res.status(500).json({message:'Error al crear la materia'})                  
    }
}
MateriaController.updateMateria=async(req,res)=>{
  try {
    const {id}=req.params
    const data=req.body
    const result=await Materias.update(id,data)
    return res.status(201).json(result)  
  } catch (error) {
    return res.status(500).json({message:'Error al actualizar la materia'})
  }
}
MateriaController.deleteMateria=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await Materias.delete(id)
        return res.status(201).json(result)
    } 
    catch (error) {   
        return res.status(500).json({message:'Error al eliminar la materia'})
    }
}
MateriaController.getListMaterias=async(req,res)=>{
    try {
        const postulantes=await Materias.getMaterias()
        return res.status(200).json({data:postulantes})
    }   
    catch (error) {
        return res.status(500).json({message:'Error al obtener postulantes con materias',error:error.message})
    }   
}
module.exports=MateriaController