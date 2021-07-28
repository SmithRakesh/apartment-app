import { deleteData, getData, saveData } from "../../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actionType";

const auth = getData("isAuth") || false

const initState = {
    token:"",
    isAuth:auth,
    isLoading:false,
    isError:false
}

export const authReducer = (state=initState,{type,payload}) => {
    switch(type){
        case LOGIN_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case LOGIN_SUCCESS:{
            saveData("isAuth",true)
            return{
                ...state,
                isLoading:false,
                isError:false,
                isAuth:true,
                token:payload
            }
        }
        case LOGIN_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case LOGOUT_REQUEST:{
            return{
                ...state,
            }
        }
        case LOGOUT_SUCCESS:{
            deleteData("isAuth")
            return{
                ...state,
                isAuth:false,
                token:""
            }
        }
        case LOGOUT_FAILURE:{
            return{
                ...state,
            }
        }
        default:
            return state
    }
}
