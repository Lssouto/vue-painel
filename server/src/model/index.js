import Mongoose from 'mongoose'

const userSchema = Mongoose.Schema({
    username: String,
    password: String,
    active: Boolean
  });

export default{
    userModel : Mongoose.model('User', userSchema)
}

// const user = new userModel({
//     username: 'lucas',
//     password: '123',
//     active: true
// })
