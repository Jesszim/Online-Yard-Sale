import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import * as actions from '../util/redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as regular from '@fortawesome/free-regular-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'

const Cart = () => {
  let cart = useSelector(state => state.cart.cart)
  let total = useSelector(state => state.cart.total)
  const dispatch = useDispatch()

  const removeitem = (item) => {
    dispatch(actions.removeFromCart(item))
  }

  useEffect(() => {
    let amt = cart.length > 0 ? cart.map(obj => obj.price).reduce((a, b) => a + b) : 0
    dispatch(actions.totalPrice(amt))
  }, [dispatch, cart])

  return (
    <div className="col-25">
      <div className="container">
        <h4 id='cartList'>Cart
          <span className="price" style={{ color: "black" }}>
            <FontAwesomeIcon icon={brands.faShopify} />
          </span>
        </h4>
        <div>
          {cart.map(obj => <ul>{obj.item}<span className="price">{obj.price} <button><FontAwesomeIcon icon={regular.faTrashCan} onClick={() => removeitem(obj.item)} id='trash' /></button></span></ul>)}
          <hr className='hr3' />
          <p>Total <span className="price" style={{ color: "black" }}><b>${total}</b></span></p>
          <button className='btn' onClick={() => dispatch(actions.clearCart())}>Clear Cart</button>
        </div>

      </div>
    </div>
  )
}

export default Cart
