
import bcrypt from 'bcryptjs'

import User from '../models/users.js'



export const getUsers = (req, res)=>{
    res.send({users:User.find({})})
}

export const signinUser= async(req, res)=>{
const {userEmail, password} = req.body
const testUser = await User.findOne({userEmail:userEmail})
if(!testUser) return res.status(404).send('The user does not exist')

if(bcrypt.compareSync(password, testUser.passwordHash)) return res.status(200).send(testUser)
res.status(404).send('Incorrect password or Email')
}

export async function  signupUser(req, res){
    console.log(req.body)
    const {userEmail, userName, password } = req.body;
    const testUser = await User.findOne({userEmail:userEmail})
    if(testUser) return res.status(404).send('user already exists')
    var salt = bcrypt.genSaltSync(10);
    var passwordHash = bcrypt.hashSync(password, salt);
    const newUser = new User({userName,userEmail, passwordHash})
    await newUser.save()
    res.status(200).send(newUser)
}

export const updateUser=(req, res)=>{
    
}

export const deleteUser=(req, res)=>{
    
}