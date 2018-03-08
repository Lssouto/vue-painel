import mongoose from 'mongoose'

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
    },
    create: (item)=>{
        functions.connect();
        item.save(function (err, user) {
            if (err) return console.error(err);
            //console.log('Salvo')
            functions.close();
        });
    },
    getOne: (item, query, fields, callback)=>{
        item.findOne(query, fields, (err, item) =>  {
            if (err) return handleError(err);
            //console.log(item)
            callback(item);
            functions.close();
        });
    }
}
export default functions;
