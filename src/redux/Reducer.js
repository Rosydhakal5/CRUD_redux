import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionType"

const initialstate = {
    loading: true,
    userlist:[],
    userobj:{},
    errormessage: ''
}
export const Reducer= (state, action)=>{
    switch (action.type){
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return{
                ...state,
                loading:false,
                errormessage: action.payload
            }
        case GET_USER_LIST:
            return{
                loading:false,
                errormessage: "",
                userlist: action.payload,
                userobj:{}
            }
        default: return state
    }
}