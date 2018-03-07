const mongoose = require('mongoose')
mongoose.connect("mongodb://"+(process.env.IP || "localhost")+"/dbpainel")

const db = mongoose.connection;

const functions = {
    connect : ()=>{
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', ()=> { console.log('Aberta') });
        db.on('disconnected',()=> { console.log('Saindo . . . ')});
    },
    close: ()=>{
        db.close();
    }
}
module.exports = {
    addUser:  (user)=>{
        functions.connect();
        user.save(function (err, user) {
            if (err) return console.error(err);
            console.log('Salvo')
            functions.close();
        });
    }    
}
