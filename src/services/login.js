
import request from '../utils/request';
 export function loginRequest(params){
     return request.post("/api/emstu/teacher/login",params)
 }
 export function registryRequest(params){
    return request.post("/api/emstu/teacher/register",params)
}