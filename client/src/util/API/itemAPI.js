import axios from 'axios'
import store from '../redux/store'
import * as actions from '../redux/actions'

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL

const itemAPI = {
  getAllItems: async () => {
    const response = await axios.get(`${REACT_APP_BASE_URL}/getitems`)
    if (response.status === 200) {
      console.log(response.data)
      let items = response.data
      store.dispatch(actions.forSale(items))

    }
  },
  addItem: async (newItem) => {
    const response = await axios.post(`${REACT_APP_BASE_URL}/additem`, newItem)
    if (response.status === 200) {
      let items = response.data
      store.dispatch(actions.forSale(items))

    }
  },
  deleteItem: async (_id) => {
    const response = await axios.delete(`${REACT_APP_BASE_URL}/deleteitem`, { data: { _id } })
    if (response.status === 200) {
      let items = response.data
      store.dispatch(actions.forSale(items))

    }
  },
  updateItem: async (updatedItem) => {
    const response = await axios.patch(`${REACT_APP_BASE_URL}/updateitem`, updatedItem)
    if (response.status === 200) {
      let items = response.data
      store.dispatch(actions.forSale(items))
    }
  },
  searchItem: async (searchInput) => {
    const response = await axios.get(`${REACT_APP_BASE_URL}/searchitem?search=${searchInput}`)
    if (response.status === 200) {
      let items = response.data
      store.dispatch(actions.forSale(items))
    }
  },
  checkout: async (newOrder) => {
    const response = await axios.post(`${REACT_APP_BASE_URL}/orderform`, newOrder)
    if (response.status === 200) {
      console.log('Order sent')
    }
  },
}
export default itemAPI