import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({path,children,exact=false,to="/login",push=false}) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    return !isAuth ? <Redirect to={to} push={push}/>:
    (
        <Route path={path} exact={exact}>
            {children}
        </Route>
    )
}

export default PrivateRoute
