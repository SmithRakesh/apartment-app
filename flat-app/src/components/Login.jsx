import React, { useState } from 'react'
import {shallowEqual, useDispatch,useSelector} from "react-redux" 
import { login } from '../redux/auth/action'
import {Redirect} from "react-router-dom"
import styles from "./Login.module.css"

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const {isAuth,isLoading,isError} = useSelector(state => state.auth,shallowEqual)

    const onSubmit = e => {
        e.preventDefault()
        const payload = {
            email,password
        }
        dispatch(login(payload))
    }
    if(isAuth) return <Redirect to="/flats" push={false}/>
    return (
        isLoading? <div className={styles.loader}></div>:
        isError?<div>Something went wrong</div>:
        <div className={styles.container}>
            <form onSubmit={onSubmit}>
            <h1>Login Page</h1>
          <input className={styles.input} type="email" value={email} placeholder="email" onChange={e => setEmail(e.target.value)} />  
          <br />
          <br />
          <input className={styles.input} type="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />  
          <br />
          <br />
          <input className={styles.login} type="submit" value="Login" />
          <br />
          <br />
        </form>
        </div>
    )
}

export default Login
