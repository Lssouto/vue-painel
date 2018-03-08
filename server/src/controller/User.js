import UserServ from '../service/user'
import UserFact from '../factory/user'

export default {
    create: (req,res)=>{
        try{
            
            const newUser  = UserFact.create(req.body)
            UserServ.addUser(newUser);

            res.send({
                data: 'Sucesso',
                status: true
            })
        }catch(e){
            console.log(e)
            res.send({
                data: 'error',
                status: false,
                error: e + ''
            })
        }
    }
}