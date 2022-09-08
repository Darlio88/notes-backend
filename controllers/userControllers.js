
import bcrypt from 'bcryptjs'

import User from '../models/users.js'
import Note from "../models/notes.js"

export const signinUser= async(req, res)=>{
try {
    const {userEmail, password} = req.body
    console.log(userEmail)
const testUser = await User.findOne({userEmail:userEmail})
console.log(testUser)
if(!testUser) return res.status(404).send('The user does not exist')
console.log(bcrypt.compareSync(password, testUser.passwordHash))
if(bcrypt.compareSync(password, testUser.passwordHash)) return res.status(202).send(testUser)
res.status(404).send('Incorrect password or Email')
} catch (error) {
    res.status(404).send(error)
}
}

export async function  signupUser(req, res){
    try {

    const {userEmail, userName, password } = req.body;
    console.log({...req.body})
    const testUser = await User.findOne({userEmail:userEmail})
    if(testUser) return res.status(404).send('user already exists')
    var salt = bcrypt.genSaltSync(10);
    var passwordHash = bcrypt.hashSync(password, salt);
    const newUser = new User({userName,userEmail, passwordHash})
    await newUser.save()
    res.status(200).send(newUser)
    } catch (error) {
        res.status(404).send({message:error.message})
    }
}

export const updateUser= async (req, res)=>{
    try {
        const {id} = req.params
         await User.findByIdAndUpdate(id, {...req.body})
        res.status(200).send({...req.body})
    } catch (error) {
        res.status(404).send(error)
    }
}

export const deleteUser= async (req, res)=>{
    
    try {
        const {id} = req.params
        await User.findByIdAndDelete(id)
        await Note.deleteMany({creatorId:id})
        res.status(200).send("the user has been deleted sucesfully")
    } catch (error) {
        res.status(404).send(error)
    }
  
}