// import React, { useState } from 'react'
// import { withRouter, Link, Redirect } from 'react-router-dom'
// import History from '../../components/history'
// import BackendApi from './backendApi'
// import { useAuth } from './protectedRoutes/auth'
// import qs from 'qs'
// import './sign.css'

// function Login (){
//     const [isLoggedIn, setLoggedIn] = useState(false);
//     const [isError, setIsError, isLoading] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const { setAuthTokens } = useAuth();

//     const onFormSubmit = e => {
//         e.preventDefault()
//         isLoading(true)
//         BackendApi.post(
//             '/index.php/login',
//             qs.stringify({
//                 email,
//                 password
//             })
//         ).then(res => {
//             console.log(res)
//             isLoading(true)
//             if (res.data.error === 1) {
//                 return isError(true)
//             } else if (res.data.error === 0) {
//                 setAuthTokens(res.data)
//                 isError(false)
//                 isLoggedIn(true)

//                 return History.push('/home')
//             }
//             //const referer = this.props.location.state.referer || '/'

//             // if (isLoggedIn) {
//             //     return <Redirect to={referer} />
//             // }
//         })
//     }
//     return (
//         <div style={{ transform: 'translateY(80%)' }} className="contain ">
//             <div className="ui middle aligned center aligned grid">
//                 <div className="column">
//                     <h2 className="ui teal image header">
//                         <div className="content">Login to your Account</div>
//                     </h2>
//                     <form
//                         className="ui large form error"
//                         onSubmit={onFormSubmit}
//                     >
//                         <div className="ui stacked segment">
//                             <div className="field">
//                                 <div className="ui left icon input">
//                                     <i className="mail icon"></i>
//                                     <input
//                                         type="email"
//                                         name="text"
//                                         value={email}
//                                         placeholder="E-mail Address"
//                                         onChange={e => {
//                                             setEmail(e.target.value)
//                                         }}
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                             <div className="field">
//                                 <div className="ui left icon input">
//                                     <i className="lock icon"></i>
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         value={password}
//                                         placeholder="Password"
//                                         onChange={e => {
//                                             setPassword(e.target.value)
//                                         }}
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             <div className="">
//                                 {' '}
//                                 <button
//                                     type="submit"
//                                     className="ui fluid large teal submit button"
//                                     disabled={isLoading(true)}
//                                 >
//                                     {isLoading(true)
//                                         ? 'Please Wait....'
//                                         : 'Login'}
//                                 </button>
//                             </div>
//                         </div>

//                         <div
//                             className="ui error message"
//                             type="submit"
//                             onClick={this.onFormSubmit}
//                         >
//                             {this.state.err
//                                 ? 'Invalid details or Account does not exist'
//                                 : ''}
//                         </div>
//                     </form>
//                     <div className="ui message">
//                         <p style={{ fontSize: '1.1rem' }}>
//                             New to us? <Link to="/signup">Sign Up</Link>{' '}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default withRouter(Login)
import React, { useState } from 'react'
import { Link, withRouter} from 'react-router-dom'
import History from '../../components/history'
import BackendApi from './backendApi'
import { useAuth } from './protectedRoutes/auth'
import qs from 'qs'
import './sign.css'

const Login = () => {
    const [setLoggedIn, startLoading] = useState(false)
    const [setIsError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setAuthTokens } = useAuth()

    const onFormSubmit = e => {
        e.preventDefault()
        BackendApi.post(
            '/index.php/login',
            qs.stringify({
                email,
                password
            })
        ).then(res => {
            console.log(res)
            startLoading(true)
            if (res.data.error === 1) {
                console.log(res)
                startLoading(false)
                return setIsError(true)
            } else if (res.data.error === 0) {
                console.log(res)
                startLoading(false)
                setAuthTokens(res.data)
                setLoggedIn(true)
                setIsError(false)
                return History.push('/home')
            }
        })
    }

    return (
        <div style={{ transform: 'translateY(80%)' }} className="contain ">
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        <div className="content">Login to your Account</div>
                    </h2>
                    <form
                        className="ui large form error"
                        onSubmit={onFormSubmit}
                    >
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="mail icon"></i>
                                    <input
                                        type="email"
                                        name="text"
                                        value={email}
                                        placeholder="E-mail Address"
                                        onChange={e => {
                                            setEmail(e.target.value)
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        placeholder="Password"
                                        onChange={e => {
                                            setPassword(e.target.value)
                                        }}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="">
                                {' '}
                                <button
                                    type="submit"
                                    className="ui fluid large teal submit button"
                                    disabled={startLoading}
                                >
                                    {!startLoading ? 'Please Wait....' : 'Login'}
                                </button>
                            </div>
                        </div>

                        <div className="ui error message" type="submit">
                            {setIsError
                                ? 'Invalid details or Account does not exist'
                                : ''}
                        </div>
                    </form>
                    <div className="ui message">
                        <p style={{ fontSize: '1.1rem' }}>
                            New to us? <Link to="/signup">Sign Up</Link>{' '}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)
