import Form from '../components/Form'
import Input from '../components/Input'
import FormFooter from '../components/FormFooter'
import { connect } from 'react-redux'
import * as actions from '../util/redux/actions'
import appAPI from '../util/API/appAPI'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const RegisterPage = (props) => {
  const nav = useNavigate()

  useEffect(() => {
    if (props.isAuth) {
      nav('/yardsale')
    }
  }, [props.isAuth, nav])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.confirmPassword === props.password) {
      let newUser = {
        username: props.username,
        password: props.password,
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email
      }
      appAPI.addUser(newUser)
    }
  }

  return (
    <div className='sign-in-container'>
      <div className='auth-form'>
        <Form
          handleSubmit={handleSubmit}
          title='SIGN UP'
          className='registration-input-container'
          btnText='Sign up'
        >
          <Input
            placeholder='First Name:'
            name='firstName'
            type='text'
            value={props.firstName}
            handleInput={props.handleInput}
          />
          <Input
            placeholder='Last Name:'
            name='lastName'
            type='text'
            value={props.lastName}
            handleInput={props.handleInput}
          />
          <Input
            placeholder='Email:'
            name='email'
            type='email'
            value={props.email}
            handleInput={props.handleInput}
          />
          <Input
            placeholder='Username:'
            name='username'
            type='text'
            value={props.username}
            handleInput={props.handleInput}
          />
          <Input
            placeholder='Password:'
            name='password'
            type='password'
            value={props.password}
            handleInput={props.handleInput}
          />
          <Input
            placeholder='Confirm Password:'
            name='confirmPassword'
            type='password'
            value={props.confirmPassword}
            handleInput={props.handleInput}
          />

          {props.message ? <h4>{props.message}</h4> : null}
        </Form>
        <FormFooter
          message='Have a account?'
          btnTxt='SIGN IN'
          path='/login'
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    password: state.auth.password,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    email: state.auth.email,
    confirmPassword: state.auth.confirmPassword,
    message: state.auth.message,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: (e) => dispatch(actions.handleInput(e.target))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)