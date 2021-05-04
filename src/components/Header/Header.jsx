import React from 'react'
import styles from './Header.module.scss'
import Logo from '../../assets/images/Logo.png'
import door from '../../assets/images/login.png'
import {Link} from 'react-router-dom'

function Header({login, isAuth, dispatch}) {

    const exitFromAdmin = () => {
        dispatch({type:'IS_AUTH', isAuth: false})
        localStorage.removeItem('name')
        localStorage.removeItem('isAuth')
    }

    return (
        <div className={styles.header}>
            <div>
                <img src={Logo} alt="picture"/>
            </div>
            <div>
                <Link to={'/Home'}><span>Home</span></Link>
                <Link to={'/Products'}><span>Products</span></Link>
                <Link to={'/About'}><span>About</span></Link>
            </div>
            <div className={styles.login}>
                {isAuth 
            ?<div><Link to={'/Admin'}><span>{isAuth ? login : 'Login'}</span></Link> <img onClick={()=>{
                exitFromAdmin()
            }} 
            src={door} alt="picture"/></div>
            :<div><Link to={'/Login'}><span>{isAuth ? login : 'Login'}</span></Link> <img onClick={()=>{
                exitFromAdmin()
            }} src={door} alt="picture"/></div>
                }
            </div>
        </div>
    )
}

export default Header
