import Form from '../components/Form'
import Input from '../components/Input'
import FormFooter from '../components/FormFooter'
import { useSelector, useDispatch } from 'react-redux'
import appAPI from '../util/API/appAPI'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



const LoginPage = () => {
  const dispatch = useDispatch()
  const nav = useNavigate()

  let username = useSelector(state => state.auth.username)
  let password = useSelector(state => state.auth.password)
  let message = useSelector(state => state.auth.message)
  let isAuth = useSelector(state => state.auth.isAuth)

  useEffect(() => {
    if (isAuth) {
      nav('/yardsale')
    }
  }, [nav, isAuth])

  const handleSubmit = (e) => {
    e.preventDefault()
    let userData = {
      username,
      password
    }
    appAPI.login(userData)
  }
  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      payload: e.target
    })
  }
  return (
    <div className='sign-in-container'>
      <div className='auth-form'>
        <Form
          handleSubmit={handleSubmit}
          title='LOGIN'
          className='login-input-container'
          btnText='Login'
        >
          <Input
            placeholder='Username:'
            name='username'
            type='text'
            value={username}
            handleInput={handleInput}
          />
          <Input
            placeholder='Password:'
            name='password'
            type='password'
            value={password}
            handleInput={handleInput}
          />
          {message ? <h4>{message}</h4> : null}
        </Form>
        <FormFooter
          message='Need to register?'
          btnTxt='SIGN UP'
          path='/register'
        />
      </div>
    </div>
  )
}

export default LoginPage