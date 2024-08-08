import * as types from './types'

export const handleInput = (input) => {
  return {
    type: types.HANDLE_INPUT,
    payload: input
  }
}

export const logout = () => {
  return {
    type: types.LOGOUT
  }
}
export const login = (userData) => {
  return {
    type: types.LOGIN,
    payload: userData
  }
}
export const message = (message) => {
  return {
    type: types.MESSAGE,
    payload: message
  }
}
export const handleCartInput = (input) => {
  return {
    type: types.HANDLE_CART_INPUT,
    payload: input
  }
}
export const addToCart = (item) => {
  return {
    type: types.ADDTOCART,
    payload: item
  }
}
export const totalPrice = (amt) => {
  return {
    type: types.TOTALPRICE,
    payload: amt
  }
}
export const clearCart = () => {
  return {
    type: types.CLEARCART
  }
}
export const handleItemInput = (input) => {
  return {
    type: types.HANDLE_ITEM_INPUT,
    payload: input
  }
}
export const editItem = (id) => {
  return {
    type: types.EDIT_ITEM,
    payload: id
  }
}
export const forSale = (items) => {
  return {
    type: types.FOR_SALE,
    payload: items
  }
}
export const info = (info) => {
  return {
    type: types.INFO,
    payload: info
  }
}
export const address = (info) => {
  return {
    type: types.ADDRESS,
    payload: info
  }
}
export const clearInput = () => {
  return {
    type: types.CLEAR_INPUT,
  }
}
export const removeFromCart = (item) => {
  return {
    type: types.REMOVEFROMCART,
    payload: item
  }
}