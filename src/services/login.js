
import request from '../utils/request';
 export function loginRequest(params){
     return request.post("/emstu/teacher/login",params)
 }
 export function registryRequest(params){
    return request.post("/emstu/teacher/register",params)
}