import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleFlatDetails } from '../redux/app/action'
import styles from "./Single.module.css"

const SingleFlat = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {isLoading,isError,singleData} = useSelector(state => state.app,shallowEqual)

    useEffect(() => {
        dispatch(getSingleFlatDetails(id))
    },[])

    return isLoading? <div className={styles.loader}></div>:
    isError? <div>Something went wrong</div> : (
        <div>
            <h1>Single Flat Details</h1>
           <div className={styles.divider}>
                <div>
                <img  src={singleData?.image} alt={`flat-no${singleData?.flatNo}`} />
                </div>
            <div>
                <div><h3>Flat No</h3> {singleData?.flatNo}</div>
                <div><h3>Block</h3> {singleData?.block}</div>
                <div><h3>Total Members</h3> {singleData?.residents?.length}</div>
            </div>
           </div>
            <table>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                    {singleData?.residents?.map(({gender,name,age},i) => (<tbody>
                    <tr>
                        <td>{i+1}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{gender}</td>
                    </tr>
            </tbody>))}
            </table>
        </div>
    )
}

export default SingleFlat
