import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../util/redux/actions'


const Item = (props) => {
  const dispatch = useDispatch()

  let isAuth = useSelector(state => state.auth.isAuth)
  let cart = useSelector(state => state.cart.cart)
  let username = useSelector(state => state.auth.userInfo.username)



  const addtocart = () => {
    if (cart.filter(obj => props.item === obj.item) < 1) {
      let additem = {
        item: props.item,
        price: props.price
      }
      dispatch(actions.addToCart(additem))
    }
    props.setShowCart(true)

  }

  return (
    <div className="itemCard">
      <img src={`http://localhost:8000/image/${props.image}`} alt='img' className='cardImg' />
      <h2>{props.item}</h2>
      <br />
      <p>{props.details}</p>
      <br />
      <h4>${props.price}</h4>
      {username === 'admin' ? <div><button onClick={props.edit}>Edit</button><button onClick={props.delete}>Delete</button></div> : isAuth ? <button className="cardBtn"
        onClick={addtocart} >Add to cart</button> : null}
    </div>
  )
}



export default Item
