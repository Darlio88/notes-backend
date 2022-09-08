import Express from 'express'
//importing controllers for the routes
import {createNote,updateNote, deleteNote, userNotes} from '../controllers/noteControllers.js'


const route = Express.Router()

//creating a note 
route.post('/create-note', createNote)


//updating a note
route.patch("/update-note/:id",updateNote)

//deleting a note 
route.delete('/delete-note/:id', deleteNote)

//get all users notes
route.get("/get-notes/:creatorId", userNotes )

export default route