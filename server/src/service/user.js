import Mongoose from './mongoose'

export default {
    create: (user)=>{
        Mongoose.create(user);
    } ,
    getOne: (user, key, callback)=>{
        Mongoose.getOne(user,{ username: key},'', (mongooseResult)=>{
            callback(mongooseResult);
        })
    }
};