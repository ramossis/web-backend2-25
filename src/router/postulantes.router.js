const express=require('express')
const router=express.Router()
const postulantes=require('../controllers/posulante.controller')
router.post('/',postulantes.createPostulante)
router.get('/',postulantes.getAllPostulantes)
// router.get('/materias',postulantes.getListMaterias)
module.exports=router

