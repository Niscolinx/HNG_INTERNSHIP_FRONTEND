import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/auth/login'
import Signup from './pages/auth/sign_up'
import Home from './pages/home'

const App = () => {
    // const [authTokens, setAuthTokens] = useState()

    // const setTokens = data => {
    //     localStorage.setItem('tokens', JSON.stringify(data))
    //     setAuthTokens(data)
    // }
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route exact path="/home" component={Home} />
                    <Route render={notFound} />
                </Switch>
            </div>
        )
        function notFound() {
            return (
                <p style={{ textAlign: 'center', fontFamily: 'Ubuntu' }}>
                    Error 404
                </p>
                //
            )
    }
}

export default App;
