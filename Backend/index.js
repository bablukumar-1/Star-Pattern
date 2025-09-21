import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import db from './utils/db.js'
dotenv.config()
import userRoutes from './routes/user.routes.js'
const app = express()
const PORT = process.env.PORT || 4000
// middleware
app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.get('/', (req, res) => {
    res.send(' welcome bablu sarkar !')
})

db()
app.use('/api/v1/users',userRoutes)
app.listen(PORT, () => {
    console.log(`server is running on the http://localhost:${PORT}`)
})