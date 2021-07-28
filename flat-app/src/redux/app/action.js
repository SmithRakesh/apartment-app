import { GET_FLATDETAILS_FAILURE, GET_FLATDETAILS_REQUEST, GET_FLATDETAILS_SUCCESS,GETSINGLE_FLATDETAILS_FAILURE,GETSINGLE_FLATDETAILS_REQUEST,GETSINGLE_FLATDETAILS_SUCCESS } from "./actionType";
import axios from "axios"

const getFlatDetailsRequest = () => ({
    type:GET_FLATDETAILS_REQUEST
})

const getFlatDetailsSuccess = (payload) => ({
    type:GET_FLATDETAILS_SUCCESS,
    payload
})

const getFlatDetailsFailure = () => ({
    type:GET_FLATDETAILS_FAILURE
})


const getSingleFlatDetailsRequest = () => ({
    type:GETSINGLE_FLATDETAILS_REQUEST
})

const getSingleFlatDetailsSuccess = (payload) => ({
    type:GETSINGLE_FLATDETAILS_SUCCESS,
    payload
})

const getSingleFlatDetailsFailure = () => ({
    type:GETSINGLE_FLATDETAILS_FAILURE
})

const getFlatDetails = ({page,limit,order,search}) => dispatch => {
    let block = search && `&block=${search}`
    block = block || ""
    let filter = order && `&_sort=flatNo&_order=${order}`
    filter = filter || ""
    dispatch(getFlatDetailsRequest)
    return axios.get(`http://localhost:3001/flats?_page=${page}&_limit=${limit}${block}${filter}`)
    .then(res => dispatch(getFlatDetailsSuccess(res.data)))
    .catch(err => dispatch(getFlatDetailsFailure))
}


const getSingleFlatDetails = (payload) => dispatch => {
    dispatch(getSingleFlatDetailsRequest)
    return axios.get(`http://localhost:3001/flats/${payload}`)
    .then(res => dispatch(getSingleFlatDetailsSuccess(res.data)))
    .catch(err => dispatch(getSingleFlatDetailsFailure))
}

export {getFlatDetails,getSingleFlatDetails}