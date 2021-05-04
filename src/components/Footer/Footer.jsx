import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <div>
                <span>Home</span>
                <span>Products</span>
                <span>About</span>
            </div>
            <div style={{width: 250}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, et?
            </div>
        </div>
    )
}

export default Footer