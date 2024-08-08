import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as actions from '../util/redux/actions'
import itemAPI from '../util/API/itemAPI'
import Item from '../components/Item'
import Cart from '../components/Cart'
import AddItem from '../components/AddItem'
import SearchPage from '../components/Search'


const YardSale = (props) => {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [showCart, setShowCart] = useState(false)

  let username = useSelector(state => state.auth.userInfo.username)
  let items = useSelector(state => state.item.items)
  let editItem = useSelector(state => state.item.editItem)
  let editDescription = useSelector(state => state.item.editDescription)
  let editPrice = useSelector(state => state.item.editPrice)
  let editId = useSelector(state => state.item.editId)

  const handleUpdate = (e) => {
    e.preventDefault()
    let updatedItem = {
      item: editItem,
      description: editDescription,
      price: editPrice,
      _id: editId
    }
    itemAPI.updateItem(updatedItem)
    setEdit(false)
  }
  const handleDelete = (_id) => {
    itemAPI.deleteItem(_id)
  }
  useEffect(() => {
    itemAPI.getAllItems()
  }, [])
  const handleInput = (e) => {
    dispatch(actions.handleItemInput(e.target))
  }
  return (<>
  <div className='center'>
    <SearchPage />
  </div>
    
    <div id='items'>
      {items.map((item, index) =>
        <Item
          key={index}
          setShowCart={setShowCart}
          image={item.image}
          item={item.item}
          details={item.description}
          price={item.price}
          delete={() => { handleDelete(item._id) }}
          edit={() => { dispatch(actions.editItem(item._id)); setEdit(true) }}
        />)}
      {edit &&
        <form className="itemCard edit" onSubmit={handleUpdate}>
          <h1>Edit Item</h1>
          <input type='text'
            name='editItem'
            required
            value={editItem}
            onChange={handleInput} />
          <input type='text'
            name='editDescription'
            required
            value={editDescription}
            onChange={handleInput} />
          <input type='number'
            name='editPrice'
            required
            value={editPrice}
            onChange={handleInput} />
          <button type='submit'>Add</button><button onClick={() => setEdit(false)}>Cancel</button>
        </form>}
      {username === 'admin' ?
        <AddItem /> : null}
      {showCart && <div className='cartModal animate__animated animate__slideInDown '><button id='closeCart' onClick={() => setShowCart(false)}>x</button><Cart /></div>}
    </div>
  </>
  )
}



export default YardSale