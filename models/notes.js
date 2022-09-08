import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    catergory:{type:String, required:true},
    createdAt:{type:Date, immutable:true, default:new Date()},
    tags:[{type:String}],
    creatorId:{type:String, required:true},
})

const Note = mongoose.model('Note',noteSchema)
export default Note