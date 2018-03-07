import Mongoose from './mongoose'

const addItem = (user)=>{
    Mongoose.connect();
    user.save(function (err, user) {
        if (err) return console.error(err);
        console.log('Salvo')
        Mongoose.close();
    });
}
const functions = {
    addUsers: async (userArray)=>{
        userArray.forEach( async function(item){
            await addItem(item);
        });
    },
    addUser: (user)=>{
        addItem(user);
    }    
}
export default functions;