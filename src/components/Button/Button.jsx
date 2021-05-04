import React from 'react'
import styles from './Button.module.scss'

function Button(props) {
    return (
        <div onClick={props.click} className={styles.button}><button>{props.children}</button></div>
    )
}

export default Button
