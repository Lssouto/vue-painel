import store from '../store/store';

const config = {
    ApiUrl : 'http://' + window.location.hostname + ':8081' + '/api'
}
const connect = (url, options)=>{
    console.log(config.header)
    if(!options)

        return  fetch(config.ApiUrl + url)
        .then(response=> response.json())
        .catch(err =>  console.log(err))
        
        else
            return  fetch(config.ApiUrl + url,options)
            .then(response=> response.json())
            .catch(err =>  console.log(err))
}
export default{
    get: (url)=>{
        return connect(url,{
            method : 'get',
            headers : new Headers({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': store.state.token
                })
        });
    },
    post:  (url, data)=>{
        return connect(url,{
                method: 'post', 
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': store.state.token
                })
            })
    },
    put: (url, data)=>{
        return connect(url + '/' + data.id,{
            method: "put",
            body: JSON.stringify(data),
            headers: new Headers({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': store.state.token
                })
        })
    },
    del: (url, data)=>{
        return connect ( url + '/' + data, {
            method: "delete",
            headers: new Headers({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': store.state.token
                })
        })
    }
}