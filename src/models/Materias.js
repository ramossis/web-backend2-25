const connection = require('../config/db');

const Materias = {};

Materias.getAll = async() => {
    try {
        const [rows] = await connection.query('SELECT * FROM materias');
        return rows;        
    } catch (error) {
        console.log(error);
        throw error
    }
}

Materias.create=async(materiaData)=>{
    try {
        const result = await connection.query('INSERT INTO materias SET ?', [materiaData]);
        return result;
    } catch (error) {
        console.log(error);
        throw error
    }
}
Materias.delete=async(id)=>{
    try {
        const result = await connection.query('DELETE FROM materias WHERE id = ?', [id]);   
        return result;
    } catch (error) {
        console.log(error);
        throw error
    }
}
Materias.update=async(id,materiaData)=>{
    try {
        const result= await connection.query('UPDATE materias SET ? WHERE id = ?', [materiaData,id]);
        return result;       
    } catch (error) {
        console.log(error);
        throw error
    }
}
Materias.getMaterias=async()=>{
    try {
        const [rows]= await connection.query('SELECT p.id,p.apellidos,p.nombres,m.nombre_materia FROM postulantes p JOIN materias m ON p.materia_id = m.id');
        return rows;
    }    
    catch (error) {
        console.log(error);
        throw error
    }           
}
module.exports=Materias