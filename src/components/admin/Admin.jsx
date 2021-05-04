import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import Login from '../Login/Login'
import styles from './Admin.module.scss'
import MyProducts from './myProducts/MyProducts'
import NewProducts from './newProduct/NewProducts'


function Admin(props) {
    if(!props.isAuth) return (<Login {...props} />)

    return (
        <div className={styles.adminWrapper}>
            <div className={styles.navBar}>
                <ul>
                    <li><Link to={'/Admin'}> NEW PRODUCT</Link></li>
                    <li><Link to={'/Admin/my'}> MY PRODUCT</Link></li>
                </ul>
            </div>
            <div>
                <Route path={'/Admin'} render={()=>(<NewProducts {...props}/>)}  exact/>              
                <Route path={'/Admin/my'} render={()=>(<MyProducts {...props}/>)} exact/>              
            </div>
        </div>
    )
}

export default Admin
