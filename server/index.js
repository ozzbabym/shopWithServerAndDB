const express = require('express')
const userRouter = require('./routes/user.routes')
const goodsRouter = require('./routes/goods.routes')
const loginRouter = require('./routes/login.routes')
const cors = require('cors')



const PORT = process.env.PORT || 8080

const app = express()



app.use(cors())
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', goodsRouter)
app.use('/api', loginRouter)

app.listen(PORT, ()=>{
    console.log(`server has been started on port ${PORT}`)
})

