import Express from "express";
import {signinUser, signupUser,updateUser,deleteUser} from '../controllers/userControllers.js'
const route = Express.Router()




//creating a new user
route.post('/sign-in', signinUser)

//logging in a user
route.post('/sign-up', signupUser)

//updating user details 
route.patch('/update-user/:id',updateUser)

//deleting a user account
route.delete('/delete-user/:id',deleteUser)

export default route