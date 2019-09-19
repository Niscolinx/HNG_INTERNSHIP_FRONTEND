import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/auth/login'
import Signup from './pages/auth/sign_up'
import Home from './pages/home'
import { AuthContext } from './pages/auth/protectedRoutes/auth'
import PrivateRoute from './pages/auth/protectedRoutes/privateRoute'

function App(props) {
    const [authTokens, setAuthTokens] = useState()

    const setTokens = data => {
        localStorage.setItem('tokens', JSON.stringify(data))
        setAuthTokens(data)
    }
    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <PrivateRoute path="/home" component={Home} />
                    <Route render={notFound} />
                </Switch>
            </div>
        </AuthContext.Provider>
    )
}

function notFound() {
    return (
        <p style={{ textAlign: 'center', fontFamily: 'Ubuntu' }}>Error 404</p>
        //
    )
}
export default App
