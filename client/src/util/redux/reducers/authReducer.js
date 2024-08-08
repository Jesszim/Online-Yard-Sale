import * as types from '../types'

let initialState = {
  isAuth: false,
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',

  userInfo: {},
  message: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        message: ''
      }
    case types.LOGIN:
      return {
        ...state,
        isAuth: true,
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',

        userInfo: action.payload,

      }
    case types.LOGOUT:
      return {
        ...state,
        isAuth: false,
        userInfo: {}
      }
    case types.MESSAGE:
      return {
        ...state,
        message: action.payload
      }

    default:
      return state
  }
}

export default authReducer