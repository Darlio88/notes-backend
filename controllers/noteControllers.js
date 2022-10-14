import Note from '../models/notes.js'






export const createNote = async(req, res)=>{
try {
const {title, description,catergory,tags,creatorId} = req.body;
const testNote = await Note.findOne({title:title})
console.log(testNote)
if(testNote) return res.status(409).send("Use a different title")
const newNote = new Note({title,description,catergory,tags,creatorId})
await newNote.save()
res.status(200).send(newNote)
} catch (error) {
   res.staus(505).send(error)
}
}



export const updateNote = async(req, res)=>{
    try {
        const {id} = req.params
        await Note.findByIdAndUpdate(id, {...req.body})
        res.status(200).send({...req.body})
    } catch (error) {
        res.status(505).send("server error")
    }
}



export const deleteNote = async(req, res)=>{
 try {
    const {id} = req.params
    await Note.findByIdAndDelete(id)
    res.status(200).send("note successfully deleted")
 } catch (error) {
    res.status(404).send("server error")
 }   
}




export const userNotes = async (req, res) =>{
    try {
        const {creatorId} = req.params
        const notes = await Note.find({creatorId:creatorId})
        res.status(200).json(notes)
    } catch (error) {
 res.status(505).send("server error")       
    }
}