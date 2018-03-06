const config = {
    windowUrl : window.location.hostname,
    port : ':8081',
    ApiUrl : 'http://' + this.windowUrl + this.port + '/api',
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
            return  fetch(ApiUrl + url,options)
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