import React from 'react'
import styles from './MyProducts.module.scss'
import Axios from 'axios'


function MyProducts({goods, dispatch}) {
    const [change, setChange] = React.useState(false)
    const [id, setId] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [picture, setPicture] = React.useState('')
    const [price, setPrice] = React.useState(1)


    const deleteGoods = (id) => {
        Axios.delete(`http://localhost:8080/api/goods/${id}`)
        dispatch({type: 'DEL_PRODUCT', id})
    }

    const editGoods = (item) => {
        setChange(!change)
        setId(item.id)
        setTitle(item.title)
        setDescription(item.description)
        setPrice(item.price)
        setPicture(item.picture)
        
        if(change) {
            dispatch({type: 'UPDATE', item: {id,title,description,picture,price}})
            Axios.put(`http://localhost:8080/api/goods`, {id, title, description, picture, price})
        
        }
        
    }


    
    return (
        <div className={styles.productsContainer}>
            <div >
                {goods && goods.map(item=> <div key={item.id} className={styles.blockItem}>
                    <div>
                        <img src="https://mistersnacks.com/wp-content/uploads/sites/13/2017/09/Sweet-Reasons-You-Should-Not-Neglect-Your-Chocolate-Sales.jpeg" alt="picture"/>
                    </div>
                    <div style={{margin: 10}}>
                        <div style={{marginBottom: 10}}>
                            {change && id===item.id ? <input placeholder='Name product' onChange={(e)=> setTitle(e.currentTarget.value)} value={title}></input> :<span>{item.title}</span>}
                        </div>
                        <div>
                            <span onClick={()=>editGoods(item)} style={{color: 'blue', fontWeight: 'bold'}}>Edit</span>
                            <span onClick={()=>deleteGoods(item.id)} style={{color: 'red', fontWeight: 'bold'}}>Delete</span>
                        </div>
                    </div>
                    <div style={{width: 200}}>
                    {change && id===item.id ? <input placeholder='description product' onChange={(e)=> setDescription(e.currentTarget.value)} value={description}></input> :<span>{item.description}</span>}
                    </div>
                    <div>
                    {change && id===item.id ? <input type='number' placeholder='enter price' onChange={(e)=> setPrice(e.currentTarget.value)} value={price}></input> :<span>{item.price} $</span>}
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default MyProducts
