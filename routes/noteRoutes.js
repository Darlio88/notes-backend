import Express from 'express'
//importing controllers for the routes
import {createNote,updateNote, deleteNote} from '../controllers/noteControllers.js'


const route = Express.Router()

//creating a note 
route.post('/create-note', createNote)


//updating a note
route.patch("/update-note",updateNote)

//deleting a note 
route.delete('/delete-note', deleteNote)


export default route