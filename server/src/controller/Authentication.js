import UserServ from '../service/user'
import Model from '../model'
// import jwt from 'jsonwebtoken'
// import config from '../config'

// function jwtSignUser (user){
//     const ONE_WEEK = 60*60*24*7
//     return jwt.sign(user, config.data.auth.jwtSecret,{
//         expiresIn:ONE_WEEK
//     })
// }

export default {
    verify: (req,res)=>{
        try {
            UserServ.getOne(Model.userModel, req.body.username,(user)=>{
                if(user.password === req.body.pwd){

                    res.send({
                        data: user.username,
                        status: true,
                        msg: 'Login Realizado'
                        //token: jwtSignUser(user)
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
    }   
}