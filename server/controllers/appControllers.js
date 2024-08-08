import passport from 'passport'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const appControllers = {
  login: (req, res) => {
    passport.authenticate('login', (err, user, info) => {
      let response = { isAuth: false }
      if (err) {
        response.err = err
        res.status(500).json(response)
      } if (!user) {
        response.info = info
        res.status(200).json(response)
      } else {
        req.login(user, (err) => {
          if (err) {
            return res.status(500).json(err)
          } else {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: 60*60})
            response.token= token
            response.isAuth = true
            response.userInfo = user
            return res.status(200).json(response)
          }
        })
      }
    })(req, res)
  },
  addUser: (req, res) => {
    passport.authenticate('addUser', (err, user, info) => {
      let response = { isAuth: false }
      if (err) {
        response.err = err
        res.status(500).json(response)
      } if (!user) {
        response.info = info
        res.status(200).json(response)
      } else {
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: 60*60})
        response.token= token
        response.isAuth = true
        response.userInfo = user
        return res.status(200).json(response)
      }
    })(req, res)

  },
  validateAuth: (req, res) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        console.log(err)
        return res.status(401).json({ isAuth: false, message: 'An error occured' })
      }
      if (!user) {
        return res.status(401).json({ isAuth: false, message: 'Unauthorized' })
      } else {
        return res.status(200).json({ isAuth: true, userInfo: { id: user._id, username: user.username, email: user.email } })
      }
    })(req, res)
  }

}

export default appControllers