import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import itemAPI from '../util/API/itemAPI'
import * as actions from '../util/redux/actions'

const AddItem = (props) => {
  const dispatch = useDispatch()
  let item = useSelector(state => state.item.item)
  let description = useSelector(state => state.item.description)
  let price = useSelector(state => state.item.price)

  const [file, setFile] = useState(null)
  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let newItem = {
      image: file,
      item,
      description,
      price
    }
    const data = new FormData();
    for (const key in newItem) {
      data.append(key, newItem[key]);
    }
    data.append("image", file.name)
    itemAPI.addItem(data)
    dispatch(actions.clearInput())
  }
  const handleInput = (e) => {
    dispatch(actions.handleItemInput(e.target))
  }

  return (
    <form className="itemCard" onSubmit={handleSubmit}>
      <h1>Add New Item</h1>
      <input type="file" onChange={handleFile} name='profilePic' />
      <input type='text'
        name='item'
        required
        placeholder='Item Name:'
        value={item}
        onChange={handleInput} />
      <input type='text'
        name='description'
        required
        placeholder='Item Description:'
        value={description}
        onChange={handleInput} />
      <input type='number'
        name='price'
        required
        placeholder='Item Price:'
        value={price}
        onChange={handleInput} />
      <button type='submit'>Add</button>
    </form>
  )
}


export default AddItem