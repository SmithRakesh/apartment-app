import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Flats from '../components/Flats'
import Login from '../components/Login'
import SingleFlat from '../components/SingleFlat'
import PrivateRoute from './PrivateRoute'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <PrivateRoute path="/flats" exact={true}>
                <Flats/>
            </PrivateRoute>
            <PrivateRoute path="/flats/:id" >
                <SingleFlat/>
            </PrivateRoute>
            <Route>
                <h1>Page not found</h1>
            </Route>
        </Switch>
    )
}

export default Routes
