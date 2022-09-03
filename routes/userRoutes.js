import Express from "express";
import {signinUser, signupUser,updateUser,deleteUser, getUsers} from '../controllers/userControllers.js'
const route = Express.Router()


//vieiwng all created users

route.get('/', getUsers)
//creating a new user
route.post('/sign-in', signinUser)

//logging in a user
route.post('/sign-up', signupUser)

//updating user details 
route.patch('/update-user',updateUser)

//deleting a user account
route.delete('/delete-user',deleteUser)

export default route