import React from 'react'
import Button from '../Button/Button'
import styles from './Registration.module.scss'
import Axios from 'axios'
import Admin from '../admin/Admin'

function Registration(props) {
    const [login, setLogin] = React.useState('')
    const [email, setEmail] = React.useState('') 
    const [password, setPassword] = React.useState('')
    

    const registration = async (e) => {
        const respons = await Axios.post('http://localhost:8080/api/user', {login, email, password})
        setLogin('')
        setEmail('')
        setPassword('')
        if(respons.statusText === "OK"){
            props.dispatch({type: 'IS_AUTH', payload: true})
            props.dispatch({type: 'SET_NAME', name: respons.data.login})
            localStorage.setItem('name' , respons.data.login)
            localStorage.setItem('isAuth' , true)
        }   
        
        
    }

    if(props.isAuth) return (<Admin {...props} />)

    return (
        <div className={styles.registration}>
            <div className={styles.blockRegistration}>
                <div><h2>REGISTARTION</h2></div>
                <div><input onChange={e => setLogin(e.currentTarget.value)} value={login} minLength={3} placeholder="Your name..."></input></div>
                <div><input onChange={e => setEmail(e.currentTarget.value)} value={email} minLength={3} placeholder="Your email..."></input></div>
                <div><input type='password' onChange={e => setPassword(e.currentTarget.value)} value={password} minLength={3} placeholder="Your password"></input></div>
                <Button click={registration}>SUBMIT</Button>
            </div>
        </div>
    )
}

export default Registration
