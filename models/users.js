import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    userName: String,
    userEmail:String,
    passwordHash: String,
    favorites:[{type:String}],
})

const User = mongoose.model('User', userSchema)

export default User 