import Api from './Api'
const AuthUrl = '/login'

export default{
    get : ()=>{
        return Api.get(AuthUrl);
    },
    post: (credentials)=>{
        return Api.post(AuthUrl, credentials );
    }
}