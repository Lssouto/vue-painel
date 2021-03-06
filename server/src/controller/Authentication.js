import UserServ from '../service/user'
import Model from '../model'
import jwt from 'jsonwebtoken'
import config from '../config'

function jwtSignUser (user){
    const ONE_DAY = 60*60*24
    //let jsonUser = JSON.parse(JSON.stringify(user)) // Need of a pure object -_- really ?
    return jwt.sign(user, config.data.auth.jwtSecret,{
        expiresIn:ONE_DAY
    })
}

export default {
    verify: (req,res)=>{
        try {
            res.send({
                        data: "Mano",
                        status: true,
                        msg: 'Login Realizado',
                        token: 'token'
                        //temporary Token
                        // token: await jwtSignUser({
                        //     username: user.username,
                        //     id : user._id 
                        // })
                    })
            return;
            UserServ.getOne(Model.userModel, req.body.username, async (user)=>{
                if(user.password === req.body.pwd){
                    res.send({
                        data: user.username,
                        status: true,
                        msg: 'Login Realizado',
                        token: 'token'
                        //temporary Token
                        // token: await jwtSignUser({
                        //     username: user.username,
                        //     id : user._id 
                        // })
                    })
                }
                else{
                    res.send({
                        data: '',
                        status: false,
                        msg: 'Dados Incorretos'
                    })
                }
            });
        } catch (e) {
            console.log(e)
            res.send({
                data: 'error',
                status: false,
                error: e + ''
            })
        }
    },
    validate(req,res){
        try{
            const token = req.header('Authorization');
            if(token == 'tokenmaroto')
                res.send({
                    status: true,
                    data: null,
                    msg: 'Verifyng token'
                })
                else
                throw 'invalid Token';
        }catch(e){
            res.send({
                status: false,
                error: e + ''
            })
        }
        
    }
}