
import request from 'axios';
 export function loginRequest(params){
     console.log(params,"lasmlamlasmla")
     return request.post("/api/emstu/teacher/login",params)
 }