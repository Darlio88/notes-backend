import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
    createdAt:{type:Date, default:new Date()},
    tags:[{type:String}],
    creatorId:String,
})

const Note = mongoose.model('Note',noteSchema)
export default Note