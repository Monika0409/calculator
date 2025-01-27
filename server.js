const express=require('express')
const app=express()

const path=require('path')

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})


app.get("/monika",(req,res)=>{
    res.send(`<h1>mali monika </h1>`)
})


app.get("/",(req,res)=>{
    res.send("mali ")
})


PORT=3000

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})