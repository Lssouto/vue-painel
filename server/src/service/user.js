import Mongoose from './mongoose'

export default {
    addUser: (user)=>{
        Mongoose.create(user);
    } 
};