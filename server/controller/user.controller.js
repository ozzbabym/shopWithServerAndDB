const db = require('../db')



class UserController {
    async createUser ( req , res ) {
        const {login, email, password} = req.body
        const data = await db.query(`SELECT * FROM person`)
        let users = data.rows.filter(data => data.login === login || data.email === email )
        if(users.length===0){
            const newPerson = await db.query(`INSERT INTO person (login , email, password) values ($1 , $2 , $3) RETURNING *`, [login, email ,password])
            res.json(newPerson.rows[0])
        }
    }
    async getUser ( req , res ) {
        const users = await db.query(`SELECT * FROM person`)
        res.json(users.rows)
    }
    async getOneUser ( req , res ) {
        const userId = req.params.id
        const oneUser = await db.query(`SELECT * FROM person where id = $1`, [userId]) 
        res.json(oneUser.rows[0])
    }
    async updateUser ( req , res ) {
        const {id, login, email, password} = req.body
        const user = await db.query(`UPDATE person set login = $1, email = $2, password = $3 where id = $4 RETURNING *`, [login, email, password, id])
        res.json(user.rows[0])
    }
    async deleteUser ( req , res ) {
        const userId = req.params.id
        const user = await db.query(`DELETE FROM person where id = $1`, [userId])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()