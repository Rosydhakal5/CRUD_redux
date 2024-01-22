import { GET_USER_LIST, MAKE_REQUEST } from "./ActionType"

export const makeRequest = ()=>{
return{
    type: MAKE_REQUEST
}
}
export const failRequest = (err)=>{
    return{
        type: FAIL_REQUEST,
        payload: err
    }
    }
    export const userList = (data)=>{
        return{
            type: GET_USER_LIST,
            payload: data
        }
        }