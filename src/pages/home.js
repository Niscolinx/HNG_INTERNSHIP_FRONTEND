import React, { Component } from 'react'
import './home.css'
import BackendApi from './auth/backendApi'
import History from '../components/history'

export default class home extends Component {
    logout = () => {
        BackendApi.post('/index.php/logout')
            .then(res => {
                console.log(res)

                History.push('/login')
            })
            .catch(error => {
                console.log(error)
            })
 
    }

    render() {
        return (
            <div className="home">
                <div className="home_header">
                    <button className="btn_logout" onClick={this.logout}>
                        Log out
                    </button>
                </div>
                <div className="home_main">
                    <h3 className="home_text">Welcome to Team nameless</h3>
                </div>
            </div>
        )
    }
}
