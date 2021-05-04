import React from 'react'
import Button from '../Button/Button'
import styles from './Home.module.scss'


function Home({goods}) {
    

    return (
        <div className={styles.homeContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    <div><h1>TITLE (H1)</h1></div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, et quaerat! Ipsum facere molestiae eum odit! Maiores magnam beatae quibusdam.</div>
                    <Button>VIEW PRODUCTIONS</Button>
                </div>
            </div>
            <div className={styles.goodsContainer}>
                <div><h2>OUR PRODUCTS</h2></div>
                
                <div className={styles.blockGoods}>
                {goods && goods.map(item=>
                    <div key={item.id} className={styles.goodsItem}>
                        <img src="https://mistersnacks.com/wp-content/uploads/sites/13/2017/09/Sweet-Reasons-You-Should-Not-Neglect-Your-Chocolate-Sales.jpeg" alt="picture"/>
                        <div>{item.title}</div>
                        <div style={{minHeight: 70}}>{item.description}</div>
                        <div >{item.price}$</div>
                        <Button>BUY NOW</Button>
                    </div>
                    )}
                </div>
               
            </div>
        </div>
    )
}

export default Home
