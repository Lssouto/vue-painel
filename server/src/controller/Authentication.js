const model = require('../model')
const connect = require('../service/mongoose')

module.exports = {
    get: (req,res)=>{
        res.send({
            data: 'foo',
            status: true
        })
    },
    post: (req,res)=>{
        try{
            const newUser = new model.userModel({
                username: req.body.username,
                password: req.body.pwd,
                active: true
            })
            connect.addUser(newUser);
            res.send({
                data: 'Sucesso',
                status: true
            })
        }catch(e){
            console.log(e)
            res.send({
                data: 'error',
                status: false
            })
        }
    }
}