const config = {
    ApiUrl : 'http://' + window.location.hostname + ':8081' + '/api',
    header : new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
    })
}
const connect = (url, options)=>{
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
        return connect(url);
    },
    post:  (url, data)=>{
        return connect(url,{
                method: 'post', 
                body: JSON.stringify(data),
                headers: config.header
            })
    },
    put: (url, data)=>{
        return connect(url + '/' + data.id,{
            method: "put",
            body: JSON.stringify(data),
            headers: config.header
        })
    },
    del: (url, data)=>{
        return connect ( url + '/' + data, {
            method: "delete"
        })
    }
}