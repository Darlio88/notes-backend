import Note from '../models/notes.js'


export const createNote = async(req, res)=>{
const {title, description,tags,creatorId} = req.body;
const newNote = new Note({title,description,tags,creatorId})
await newNote.save()
res.status(200).send(newNote)
}

export const updateNote = async(req, res)=>{
    
}

export const deleteNote = async(req, res)=>{
    
}