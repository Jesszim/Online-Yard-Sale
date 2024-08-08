import LocalStrategy from 'passport-local'
import bcryptjs from 'bcryptjs'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import User from '../db/models/user.js'
import 'dotenv/config'

const strategy = (passport) => {
  passport.use('login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, (username, password, done) => {

    User.findOne({ username }).then(user => {
      if (!user) {
        return done(null, false, { message: 'Incorrect username or password' })
      }
      if (!bcryptjs.compareSync(password, user.password)) {
        return done(null, false, { message: 'Incorrect username or password' })
      } else {
        return done(null, user)
      }
    }).catch(err => done(err))
  }))

  passport.use('addUser', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, username, password, done) => {
    let { firstName, lastName, email } = req.body
    User.findOne({ $or: [{ username }, { email }] })
      .then((foundUser) => {
        if (foundUser) {
          if (foundUser.username === username && foundUser.email === email) {
            return done(null, false, { message: 'Username and Email already taken' })
          } else if (foundUser.username === username) {
            return done(null, false, { message: 'Username already taken' })
          } else if (foundUser.email === email) {
            return done(null, false, { message: 'Email already taken' })
          }
        } else {
          const hash = bcryptjs.hashSync(password, 10)
          let data = { firstName, lastName, username, email, password: hash }
          let newUser = new User(data)
          newUser.save()
            .then((user) => done(null, user, { message: 'Registration successful!' })).catch(err => done(err))
        }
      })
  }))
  passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromBodyField('token'),
    secretOrKey: process.env.JWT_SECRET
  }, (jwt_payload, done) => {
    User.findById(jwt_payload.id).then((user) => {
      if (user) {
        return done(null, user)
      }
    }).catch(err => done(err, false))
  }))

  passport.serializeUser((user, done) => {
    return done(null, user._id)
  })
  passport.deserializeUser((_id, done) => {
    User.findById(_id).then(user => {
      return done(null, user)
    }).catch(err => console.log(err));
  })
}

export default strategy