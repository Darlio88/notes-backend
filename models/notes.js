import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
    createdAt:{type:Date, default:Date.now},
    tags:[{type:String}],
    creatorId:String,
})

const Note = mongoose.model('Note',noteSchema)
export default Note