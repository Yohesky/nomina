import express, {Application} from "express";

import cors from "cors"
import passport from "passport"
import passportmiddleware from "./config/passport"

const index: Application = express()

import authRoutes from './routes/auth'
import employees from "./routes/employees"

import "./database"

index.set('port',process.env.PORT || 8000)



//middlewares
// index.use(morgan("dev"))
index.use(express.json())
index.use(cors())
index.use(passport.initialize())
passport.use(passportmiddleware)
//routes
index.use("/api/auth",authRoutes)
index.use(employees)

export default index;