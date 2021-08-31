import React, { useEffect, useState } from 'react'
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { getFlatDetails } from '../redux/app/action'
import { logout } from '../redux/auth/action'
import Card from './Card'
import styles from "./Flats.module.css"

const Flats = () => {
    const [page,setPage] = useState(1)
    const [order,setOrder] = useState()
    const [search,setSearch] = useState("")
    const {data,isLoading,isError} = useSelector(state => state.app,shallowEqual)
    const dispatch = useDispatch()
    const limit = 12

    const handleChange = e => {
        setSearch(e.target.value.toUpperCase())
        setPage(1)
    }
    
    const params = {
        page,
        limit,
        order,
        search
    }
    useEffect(() => {
        dispatch(getFlatDetails(params))
    },[page,order,search])
    return isLoading? <div className={styles.loader}></div>:
    isError? <div>Something went wrong</div>:(
        <div>
            <div>
                <input type="text" value={search} placeholder="search by block" maxLength={1} onChange={handleChange}/>
            </div>
            <div>
                <span>Sort by:- </span>
            <select onChange={e => setOrder(e.target.value)}>
                {["asc","desc"].map(item => <option key={item} value={item}>{item}</option>)}
            </select>
            </div>
            <button className={styles.logout} onClick={()=>dispatch(logout(""))}>logout</button>
            <div className={styles.cardContainer}>
                {
                    data?.map(flat => <Card key={flat.id} key={flat.id} {...flat}/>)
                }
            </div>
            <div>
                <button disabled={page===1} onClick={() => setPage(page-1)}>prev </button>
                <span>{page}</span>
                <button disabled={data?.length < 12} onClick={() => setPage(page+1)}> next</button>
            </div>
        </div>
    )
}

export default Flats
