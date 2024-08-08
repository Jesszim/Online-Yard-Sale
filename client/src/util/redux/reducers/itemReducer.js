import * as types from '../types'

let initialState = {
  items: [],
  search: '',

  item: '',
  description: '',
  price: 0,

  editItem: '',
  editDescription: '',
  editPrice: 0,
  editId: ''
}

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_ITEM_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,

      }
    case types.FOR_SALE:
      return {
        ...state,
        items: action.payload
      }
    case types.EDIT_ITEM:
      let editItem = state.items.find((item) => item._id === action.payload)
      return {
        ...state,
        editItem: editItem.item,
        editDescription: editItem.description,
        editPrice: editItem.price,
        editId: action.payload
      }
    case types.CLEAR_INPUT:
      return {
        ...state,
        item: '',
        description: '',
        price: ''
      }
    default:
      return state
  }
}
export default itemReducer