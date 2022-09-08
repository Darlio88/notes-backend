import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    userName: String,
    userEmail:{
        type:String, 
        required:true},
    passwordHash: String,
    favorites:[{type:String}],
})

const User = mongoose.model('User', userSchema)

export default User 