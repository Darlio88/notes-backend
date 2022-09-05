import Note from '../models/notes.js'



export const createNote = async(req, res)=>{
try {
const {title, description,catergory,tags,creatorId} = req.body;
const newNote = new Note({title,description,catergory, tags,creatorId})
await newNote.save()
res.status(200).send(newNote)
} catch (error) {
   res.staus(404).send(error)
}
}

export const updateNote = async(req, res)=>{
    try {
        const {id} = req.params
        const targetNote = await Note.findByIdAndUpdate(id, req.params)
        res.status(200).send(targetNote)
    } catch (error) {
        res.status(404).send(error)
    }
}

export const deleteNote = async(req, res)=>{
 try {
    const {id} = req.params
    await Note.findByIdAndDelete(id)
    res.status(404).send("note successfully deleted")
 } catch (error) {
    res.status(404).send(error)
 }   
}