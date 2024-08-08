import axios from 'axios'
import store from '../redux/store'
import * as actions from '../redux/actions'

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL

const appAPI = {
  addUser: async (userData) => {
    const response = await axios.post(`${REACT_APP_BASE_URL}/adduser`, userData)
    if (response.status === 200) {
      let status = response.data
      if (status.isAuth) {
        let { userInfo, token } = response.data
        sessionStorage.setItem('token', token)
        store.dispatch(actions.login(userInfo))
      } else {
        store.dispatch(actions.message(status.info.message))
      }
    }
  },
  login: async (userData) => {
    const response = await axios.post(`${REACT_APP_BASE_URL}/login`, userData)
    if (response.status === 200) {
      if (response.data.isAuth) {
        let { userInfo, token } = response.data
        sessionStorage.setItem('token', token)
        store.dispatch(actions.login(userInfo))
      } else {
        store.dispatch(actions.message(response.data.info.message))
      }
    }
  },
  validateAuth: async () => {
    let token = sessionStorage.getItem('token')
    const response = await axios.post(`${REACT_APP_BASE_URL}/refresh`, { token })
    if (response.status === 200) {
      if (response.data.isAuth) {
        let { userInfo } = response.data
        store.dispatch(actions.login(userInfo))
      }
    }
  }
}

export default appAPI