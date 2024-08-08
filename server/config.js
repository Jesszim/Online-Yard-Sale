import MongoStore from 'connect-mongo'
import 'dotenv/config'

const config = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  corsConfig: {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true
  },
  sessionsConfig: {
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    cookie: { secure: false },
    key: 'expess.sid'
  }
}

export default config