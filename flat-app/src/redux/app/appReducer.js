import { GET_FLATDETAILS_FAILURE, GET_FLATDETAILS_REQUEST, GET_FLATDETAILS_SUCCESS,GETSINGLE_FLATDETAILS_SUCCESS,GETSINGLE_FLATDETAILS_REQUEST,GETSINGLE_FLATDETAILS_FAILURE} from "./actionType";

const init = {
    isLoading:false,
    isError:false,
    data:[],
    singleData:{}
}
export const appReducer = (state=init,{type,payload}) => {
    switch(type){
        case GET_FLATDETAILS_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case GET_FLATDETAILS_SUCCESS:
            return {
                ...state,
                data:payload,
                isLoading:false
            }
        case GET_FLATDETAILS_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
            case GETSINGLE_FLATDETAILS_REQUEST:
                return{
                    ...state,
                    isLoading:true,
                    isError:false
                }
            case GETSINGLE_FLATDETAILS_SUCCESS:
                return {
                    ...state,
                    singleData:payload,
                    isLoading:false
                }
            case GETSINGLE_FLATDETAILS_FAILURE:
                return {
                    ...state,
                    isLoading:false,
                    isError:true
                }
            default:
                return state
    }
}