require('dotenv/config')

const express=require('express')
const cors =require('cors')
const app=express()
app.use(cors())
app.use(express.json())

app.use('/api/materias',require('./src/router/materias.router'))
app.use('/api/postulantes',require('./src/router/postulantes.router'))

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})