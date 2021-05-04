import React from 'react'
import Button from '../Button/Button'
import styles from './Login.module.scss'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Admin from '../admin/Admin'

function Login(props) {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('border: 1px solid lightgray')
    
    const checkUser = async() => {
        const respons = await Axios.post('http://localhost:8080/api/login', {login, password})

        if(respons.statusText === "OK"){
            props.dispatch({type: 'IS_AUTH', payload: true})
            props.dispatch({type: 'SET_NAME', name: respons.data.login})
            localStorage.setItem('name' , respons.data.login)
            localStorage.setItem('isAuth' , true)
            
        }else{
            console.log(respons)
        }
        
    }

    if (props.isAuth) return (<Admin {...props} />)

    return (
        <div className={styles.login}>
            <div className={styles.blockLogin}>
                <div><h2>LOGIN</h2></div>
                <div><input onChange={e => setLogin(e.currentTarget.value)} value={login} style={{border: `${error}`}} placeholder="Your name..."></input></div>
                <div><input onChange={e => setPassword(e.currentTarget.value)} value={password} style={{border: `${error}`}} type='password' placeholder="Your password"></input></div>
                <Button click={checkUser}>SUBMIT</Button>
                <Button><Link to={'/Registration'}>REGISTRATION</Link></Button>
            </div>
        </div>
    )
}

export default Login
