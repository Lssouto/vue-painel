import Model from '../model'
import UserServ from '../service/user'

export default{
    get: (req,res)=>{
        res.send({
            data: 'foo',
            status: true
        })
    },
    post: (req,res)=>{
        try{
            const newUser = new Model.userModel({
                username: req.body.username,
                password: req.body.pwd,
                active: true
            })
            UserServ.addUser(newUser);
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