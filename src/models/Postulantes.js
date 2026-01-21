const connection =require('../config/db')
// const Matrias=require('../models/Materias')
const Postulantes = {}
Postulantes.getAllPostulantes = async()=>{
    try {
        const [rows]= await connection.query('SELECT * FROM postulantes')   
        return rows 
    } catch (error) {
        console.log(error);
        throw error 
    }   
}
Postulantes.createPostulante =async(postulanteData)=>{
    try {
        const result= await connection.query('INSERT INTO postulantes SET ?',[postulanteData])
        return result   
    } catch (error) {
        console.log(error);
        throw error 
    }
}

module.exports=Postulantes