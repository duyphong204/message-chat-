import 'dotenv/config'
import express,{Request,Response} from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { Env } from './config/env.config'
import { asyncHandler } from './middlewares/asyncHandler.middleware'
import { HTTPSTATUS } from './config/http.config'
import { errorHandler } from './middlewares/errorHandler.middleware'
import connecDB from './config/database.config'
import passport from 'passport'
import './config/passport.config'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended : true}))
app.use(cors({
  origin:Env.FRONTEND_ORIGIN,
  credentials:true
}))

app.use(passport.initialize())

app.get('/heath',asyncHandler(async(req:Request,res:Response)=>{
  res.status(HTTPSTATUS.OK).json({messsage:"server is heathy",status:"Ok"})
}))

app.use('/api',routes)

app.use(errorHandler)

app.listen(Env.PORT,async() => {
  await connecDB()
  console.log(`server running ${Env.PORT}`)
})