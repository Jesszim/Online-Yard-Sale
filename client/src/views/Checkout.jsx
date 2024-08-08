import { connect } from 'react-redux'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as regular from '@fortawesome/free-regular-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
import * as actions from '../util/redux/actions'
import itemAPI from '../util/API/itemAPI';
import Cart from '../components/Cart';

const Checkout = (props) => {
  const [checked, setChecked] = useState(false)
  const [confirm, setConfirm] = useState(false)

  const nav = useNavigate()

  const handleSubmit = () => {
    if (props.cart.length > 0) {
      let data = {
        fullname: props.fullname,
        email: props.email,
        billingAddress: props.billingAddress,
        billingInfo: props.billingInfo,
        shippingAddress: props.shippingAddress,
        cart: props.cart,
        total: props.total
      }

      itemAPI.checkout(data)
      nav('/ThankYou')
      props.clearCart()
    }
  }
  const handleInfo = () => {
    let fulladdress = {
      address: props.address,
      city: props.city,
      state: props.state,
      zip: props.zip
    }
    let info = {
      cardName: props.cardName,
      ccnum: props.ccnum,
      expMonth: props.expMonth,
      expYear: props.expYear,
      ccv: props.ccv
    }
    props.info(info)
    props.fulladdress(fulladdress)
  }



  return (
    <>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form >

              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname"><FontAwesomeIcon icon={regular.faUser} /> Full Name</label>
                  <input type="text" id="fname" name="fullname" placeholder="John M. Doe" value={props.fullname} onChange={props.handleInput} required />
                  <label for="email"> <FontAwesomeIcon icon={regular.faEnvelope} /> Email</label>
                  <input type="text" id="email" name="email" placeholder="john@example.com" value={props.email} onChange={props.handleInput} />
                  <label for="adr"> <FontAwesomeIcon icon={regular.faAddressCard} /> Address</label>
                  <input type="text" id="adr" name="address" value={props.address} onChange={props.handleInput} placeholder="542 W. 15th Street" />
                  <label for="city"><FontAwesomeIcon icon={regular.faBuilding} /> City</label>
                  <input type="text" id="city" name="city" value={props.city} onChange={props.handleInput} placeholder="New York" />

                  <div className="row">
                    <div className="col-50">
                      <label for="state">State</label>
                      <input type="text" id="state" name="state" value={props.state} onChange={props.handleInput} placeholder="NY" />
                    </div>
                    <div className="col-50">
                      <label for="zip">Zip</label>
                      <input type="text" id="zip" name="zip" value={props.zip} onChange={props.handleInput} placeholder="10001" />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <FontAwesomeIcon icon={brands.faCcVisa} style={{ color: "navy" }} />
                    <FontAwesomeIcon icon={brands.faCcAmex} style={{ color: "blue" }} />
                    <FontAwesomeIcon icon={brands.faCcMastercard} style={{ color: "red" }} />
                    <FontAwesomeIcon icon={brands.faCcDiscover} style={{ color: "orange" }} />
                  </div>
                  <label for="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardName" value={props.cardName} onChange={props.handleInput} placeholder="John More Doe" />
                  <label for="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="ccnum" value={props.ccnum} onChange={props.handleInput} placeholder="1111-2222-3333-4444" />
                  <label for="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expMonth" value={props.expMonth} onChange={props.handleInput} placeholder="September" />

                  <div className="row">
                    <div className="col-50">
                      <label for="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expYear" value={props.expYear} onChange={props.handleInput} placeholder="2018" />
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input type="text" id="cvv" name="ccv" value={props.ccv} onChange={props.handleInput} placeholder="352" />
                    </div>
                  </div>

                </div>
              </div>
              <label>
                <input type="checkbox" name="sameadr" id='checked' checked={!checked} onChange={() => { setChecked(!checked) }} /> Shipping address same as billing
              </label>
              {checked &&
                <div className="col-50">
                  <h3>Shipping Address</h3>
                  <label for="fname"><FontAwesomeIcon icon={regular.faUser} /> Full Name</label>
                  <input type="text" id="fname" name="shippingAddress" onChange={props.handleInput} placeholder="John M. Doe" />
                  <label for="adr"> <FontAwesomeIcon icon={regular.faAddressCard} /> Address</label>
                  <input type="text" id="adr" name="shippingAddress" onChange={props.handleInput} placeholder="542 W. 15th Street" />
                  <label for="city"><FontAwesomeIcon icon={regular.faBuilding} /> City</label>
                  <input type="text" id="city" name="shippingAddress" onChange={props.handleInput} placeholder="New York" />
                  <div className="row">
                    <div className="col-50">
                      <label for="state">State</label>
                      <input type="text" id="state" name="shippingAddress" onChange={props.handleInput} placeholder="NY" />
                    </div>
                    <div className="col-50">
                      <label for="zip">Zip</label>
                      <input type="text" id="zip" name="shippingAddress" onChange={props.handleInput} placeholder="10001" />
                    </div>
                  </div>
                </div>}
            </form>
            <button onClick={() => { setConfirm(true); handleInfo() }} value="Continue to checkout" className="btn">Continue to checkout</button>
            {confirm &&
              <div id='confirmCard'>
                <h1>Checkout Complete?</h1>
                <div id='confirmBtns'>
                  <button className='buyBtn redBtn' onClick={() => setConfirm(false)}>Cancel</button>
                  <button className='buyBtn ' onClick={handleSubmit}>Checkout</button>
                </div>
              </div>
            }
          </div>
        </div>
        <Cart />
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    fullname: state.cart.fullname,
    email: state.cart.email,
    billingAddress: state.cart.billingAddress,
    billingInfo: state.cart.billingInfo,
    shippingAddress: state.cart.shippingAddress,
    cart: state.cart.cart,
    total: state.cart.total,

    address: state.cart.address,
    city: state.cart.city,
    state: state.cart.state,
    zip: state.cart.zip,

    cardName: state.cart.cardName,
    ccnum: state.cart.ccnum,
    expMonth: state.cart.expMonth,
    expYear: state.cart.expYear,
    cvv: state.cart.ccv,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: (e) => dispatch(actions.handleCartInput(e.target)),
    clearCart: () => dispatch(actions.clearCart()),
    fulladdress: (e) => dispatch(actions.address(e)),
    info: (e) => dispatch(actions.info(e)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout)