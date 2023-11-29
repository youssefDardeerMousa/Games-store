import express from 'express'
import { connectDB } from './db/models/connection.js';
import autherRouter from './src/module/Auther/auther.router.js';
import bookRouter from './src/module/Books/books.router.js';
const app =express();

 connectDB()
 app.use(express.json())
 app.use("/Auther",autherRouter)
 app.use("/book",bookRouter)
 app.all("*",(req,res)=>{
res.json({message:"This Page Is Not Found"})
 })
app.listen(3000,()=>{
    console.log("server is running.....");
})