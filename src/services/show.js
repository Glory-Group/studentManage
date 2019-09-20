import request from "../utils/request"

export function listRequest(params){
      return request.get("/api/emstu/student/recordlists")
}
export function titleRequest(){
    return request.get("/api/emstu/class/lists")
}
export function showUserInfo(){
    return request.get("/api/emstu/teacher/userlist")
}