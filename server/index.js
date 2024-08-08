import express from 'express'
import cors from 'cors'
import router from './routes/appRoutes.js'

import imageRouter from './routes/imageRoutes.js'
import dbConnect from './db/index.js'
import config from './config.js'
import auth from './passport/index.js'

const app = express()

app.use(cors(config.corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
auth(app)



dbConnect(app)

app.use(router)
app.use(imageRouter) // it works here for some reason