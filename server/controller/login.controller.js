const db = require('../db')



class LoginController {
    async loginUser ( req , res ) {
        const {login, password} = req.body
        const data = await db.query(`SELECT * FROM person`)
        data.rows.forEach(element => {
            if((element.login === login || element.email === login) && element.password === password){
                res.send({login})
            }
        });
        
    }
}

module.exports = new LoginController()