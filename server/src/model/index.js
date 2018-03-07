const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    active: Boolean
  });

module.exports =  {
    userModel : mongoose.model('User', userSchema)
}

// const user = new userModel({
//     username: 'lucas',
//     password: '123',
//     active: true
// })
