import * as Cookie from 'js-cookie';

const key = 'sessionid';
//取token
export let getToken = ()=>{
    return Cookie.get(key);
};

//存token 并且设置7天免登陆
export let setToken= (val)=>{
    Cookie.set(key, val, { expires: 7 });
};

//移除token
export let removeToken = ()=>{
    Cookie.remove(key);
};