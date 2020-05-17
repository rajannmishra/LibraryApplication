


export const get = (url,params,callsback=defaultCallback, headers ={} , error = defaultErrorFuntcion) =>{
    return fetch( url,params,getRequest(headers))
    .then(response=>{
        if(response.ok){
            return response;
        }else{
            console.log(`${JSON.stringify(response)}`);
            let error = new Error(response.statusText);
            error.response=response;
            throw error;
        }
    })
    .then(response=>{
        if(response.headers.get('Content-TYpe').indexOf('application/json') >-1){
            response = response.json().then(response=>{
                return{
                    status : response.status,
                    statusText : response.statusText,
                    config:{url:response.url},
                    data:response
                }
            });
           
        }
        return response;
    })
    .then(callsback).catch(error);
};

export const post = (url,data,params,callsback=defaultCallback, headers ={} , error = defaultErrorFuntcion) =>{
    return fetch( url,getRequest(headers,'POST',data))
    .then(response=>{
        if(response.ok){
            return response;
        }else{
            console.log(`${JSON.stringify(response)}`);
            let error = new Error(response.statusText);
            error.response=response;
            throw error;
        }
    })
    .then(response=>{
        if(response.headers.get('Content-TYpe').indexOf('application/json') >-1){
            response = response.json().then(response=>{
                return{
                    status : response.status,
                    statusText : response.statusText,
                    config:{url:response.url},
                    data:response
                }
            });
            
        }
        return response;
    })
    .then(callsback).catch(error);
};



const defaultCallback= response=>response;

const defaultErrorFuntcion =(error)=>{
    console.error("Error code : ${error.code}, message : ${error.message}");
}

const getRequest = (headers,method= "GET",data='')=>{
    let request = {};
    request.method = method;
    request.headers = new Headers({...getDefaultHeaders,...headers});
    if(!!data){
        request.body = JSON.stringify(data);
    }
    return request;
}

const getDefaultHeaders = {
    'Content-Type':'application/json'
}

const getResolvedUrl =(urlsKey)=>{

}