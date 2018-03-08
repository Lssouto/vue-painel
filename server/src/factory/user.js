import Model from '../model'


export default {
    create : (credentials)=>{
        return new Model.userModel({
                username: credentials.username,
                password: credentials.pwd,
                active: true
            })
    }
}