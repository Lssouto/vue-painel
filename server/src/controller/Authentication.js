import UserServ from '../service/user'

export default{
    verify : ()=>{
        try {
            
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