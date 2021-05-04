const db = require('../db')



class GoodsController {
    async createGoods ( req , res ) {
        const {title, description, price, picture} = req.body
        const newGoods = await db.query(`INSERT INTO goods (title, description, price, picture) values ($1 , $2 , $3, $4) RETURNING *`, [title, description, price, picture])
        res.json(newGoods.rows[0])
        
    }
    async getGoods ( req , res ) {
        const goods = await db.query(`SELECT * FROM goods`)
        res.json(goods.rows)
    }
    
    async updateGoods ( req , res ) {
        const {id, title, description, price, picture} = req.body
        const goods = await db.query(`UPDATE goods set title = $1, description = $2, price = $3, picture= $4 where id = $5 RETURNING *`, [title, description, price, picture, id])
        res.json(goods.rows[0])
    }
    async deleteGoods ( req , res ) {
        const goodsId = req.params.id
        const goods = await db.query(`DELETE FROM goods where id = $1`, [goodsId])
        res.json(goods.rows[0])
    }
}

module.exports = new GoodsController()