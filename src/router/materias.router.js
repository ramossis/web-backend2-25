const express = require('express');
const router =express.Router()

const materias=require('../controllers/materia.controller')

router.get('/',materias.getAllMaterias)
router.post('/',materias.createMateria)
router.put('/:id',materias.updateMateria)
router.delete('/:id',materias.deleteMateria)
router.get('/postulantes',materias.getListMaterias)
module.exports=router