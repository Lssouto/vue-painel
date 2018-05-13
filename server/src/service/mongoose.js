import mongoose from 'mongoose'

const db = mongoose.connection;
db.once('open', ()=> { console.log('Aberta') });
db.on('error', console.error.bind(console, 'connection error:'));
db.on('connected',()=> { console.log('Conectado . . . ')});
db.on('connecting',()=> { console.log('Conectando . . . ')});
db.on('disconnected',()=> { console.log('Saindo . . . ')});

const functions = {
    connect : ()=>{
        try {
            mongoose.connect("mongodb://"+(process.env.IP || "localhost:27017")+"/dbpainel")
        }catch(e){
            console.log('error: ' + e)
        }
    },
    close: ()=>{
        db.close();
    },
    create: (item)=>{
        console.log(item);
        functions.connect();
        item.save(function (err, user) {
            if (err) return functions.handleError();
            //console.log('Salvo') 
            functions.close()
        });
    },
    getOne: (item, query, fields, callback)=>{
        functions.connect();
        item.findOne(query, fields, (err, item) =>  {
            if (err) return functions.handleError(err);
            //console.log(item)
            functions.close();
            callback(item);
        });
    },
    handleError(err){
        console.error(err);
        functions.close();
    }
}
//functions.connect();
export default functions;
