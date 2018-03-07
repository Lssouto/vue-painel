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
    }
}
export default{
    addUser:  async (user)=>{
        functions.connect();

        if(Array.isArray(user))
            await user.forEach(function(item){
                item.save(function (err, user) {
                    if (err) return console.error(err);
                    console.log('Salvo')
                });
            });      
        
            else
                await user.save(function (err, user) {
                    if (err) return console.error(err);
                    console.log('Salvo')
                });
        functions.close();
    }    
}
