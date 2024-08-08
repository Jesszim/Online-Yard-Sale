import * as types from '../types'

let initialState = {
  fullname: '',
  email: '',

  address: '',
  city: '',
  state: '',
  zip: '',

  cardName: '',
  ccnum: '',
  expMonth: '',
  expYear: '',
  cvv: '',

  billingAddress: [],
  billingInfo: [],
  shippingAddress: [],
  cart: [],
  total: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_CART_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,

      }
    case types.ADDTOCART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case types.REMOVEFROMCART:

      return {
        ...state,
        cart: state.cart.filter(item => item.item !== action.payload)
      }
    case types.INFO:
      return {
        ...state,
        billingInfo: [action.payload],
      }
    case types.ADDRESS:
      return {
        ...state,
        billingAddress: [action.payload],
      }
    case types.TOTALPRICE:
      return {
        ...state,
        total: action.payload
      }
    case types.CLEARCART:
      return {
        ...state,
        cart: [],
        total: 0,
        fullname: '',
        email: '',

        address: '',
        city: '',
        state: '',
        zip: '',

        cardName: '',
        ccnum: '',
        expMonth: '',
        expYear: '',
        cvv: '',
      }
    default:
      return state
  }
}

export default cartReducer