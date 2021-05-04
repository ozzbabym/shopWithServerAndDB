import React from 'react'
import styles from '../Admin.module.scss'
import Button from '../../Button/Button'
import Axios from 'axios'



function NewProducts({dispatch}) {
    
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [picture, setPicture] = React.useState([])
    

    const addNewGoods = () => {
        
        Axios.post('http://localhost:8080/api/goods', {title, description, price, picture}, {
            headers: {
                'Content-Type': 'application/json', 
                }
        })
        dispatch({type: 'NEW_PRODUCT', product: { title, description, price, picture}})
        setTitle('')
        setDescription('')
        setPrice('')
        setPicture('')
    }
    const uploadFile = (e) => {
        //i try download image in base64 in sql

        // let file = e.target.files[0]
        // let reader = new FileReader()
        // reader.onloadend = function(){
        //    
        //     console.log(reader.result)
        // }
        // reader.readAsDataURL(file)
       setPicture(e.target.files[0].name)
    }

    return (
        <div className={styles.addNewGoods}>
                    <div>
                        <div>Name produt</div>
                        <input onChange={e=>setTitle(e.currentTarget.value)} value={title}></input>
                    </div>
                    <div>
                        <div>Description</div>
                        <input onChange={e=>setDescription(e.currentTarget.value)} value={description}></input>
                    </div>
                    <div className={styles.footerBlock}>
                        <div>
                            <span>Price </span><input onChange={e=>setPrice(e.currentTarget.value)} value={price} type='number'></input>
                        </div>
                        <div >
                            <span>Add image</span><input onChange={uploadFile} style={{height: 28, width: 140}} type="file" />
                        </div>
                        <Button click={addNewGoods}>ADD PRODUCT</Button>
                    </div>
                </div>
    )
}

export default NewProducts
