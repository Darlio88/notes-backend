//importing peer dependencies
import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";


//importing important routes
import userRoutes from './routes/userRoutes.js'
import noteRoutes from './routes/noteRoutes.js'

//creating an app instance
const app= Express()
config()
app.use(cors())
app.use(bodyParser.json())
app.use(Express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/user',userRoutes);
app.use('/note', noteRoutes)




mongoose.connect(
        process.env.MONGODB_URI,
         (err, body) =>{
            if(err) return (console.log(err.message));
            console.log('app connected to database successfully')
         }
        )


const PORT = 5000;

app.listen(PORT,()=>{
    console.log('app listening on port 5000')
})