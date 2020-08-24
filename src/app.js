import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import indexRouter from './routes/index'
import usersRouter from './routes/users'

const app = express()
const port = process.env.port || 3000 
app.set('port', port)

//Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use('/public', express.static('../public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(app.get('port'), () => {
    console.log(`Server Lintening on http://localhost:${app.get('port')}`)
})

module.exports = app