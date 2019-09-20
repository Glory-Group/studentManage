import axios from 'axios';
import {getToken} from "./saveToken";

const instance = axios.create({
    // baseURL: 'http://localhost:7001',
    timeout: 1000,
     headers: {'sessionid': getToken(),'tid':"50e270fe-5e8d-4ca3-bbfc-9e5d93118963","role":"3"}
});

// 请求拦截器
instance.interceptors.request.use( (config) =>{
    // Do something before request is sent
    return config;
  }, (error)=> {
    // Do something with request error
    return Promise.reject(error);
  }
);
 
// 响应拦截器
instance.interceptors.response.use( (response) =>{
    // Do something with response data
    if (response.status !== 200){
      alert.error(response.statusText);
    }
    return response.data;
  },  (error) =>{
    // Do something with response error
    if (error.response.status && error.response.status !== 200){
      alert.error(error.response.statusText);
    }else{
      // message.error(error.response);
    }
    return Promise.resolve(error);
  }
);

export default instance;
