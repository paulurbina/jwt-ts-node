import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import authRouter from './routes/auth.routes'
import passport from "passport";
import passportMiddleware from "./middlwares/passport";
import privateRouter from './routes/private.routes'

const app  = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize())
passport.use(passportMiddleware)

app.use(authRouter)
app.use(privateRouter)

export default app