import Item from '../db/models/item.js'

const itemControllers = {
  getAllItems:(req,res)=>{
    Item.find().then((item)=>{
      res.json(item)
    }).catch(err=>console.log(err))
  },
  addItem:(req,res) =>{
    console.log(req.body)
    let {item, description, price} = req.body
    let { filename: image } = req.file
    let data = {item, description, price, image}
    let newItem = new Item(data)
    newItem.save().then(()=>{
      Item.find()
      .then((item)=>{
        res.json(item)
      }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
  },
  deleteItem:(req,res)=>{
let{_id}= req.body
Item.findByIdAndDelete({_id})
.then(()=>{
  Item.find()
  .then((item)=>{
    res.json(item)
  }).catch(err=>console.log(err))
}).catch(err=>console.log(err))
  },
  updateItem:(req,res)=>{
    let{_id, item, description, price}= req.body
    let updatedItem = {item, description, price}
    Item.findByIdAndUpdate({_id}, updatedItem)
    .then(()=>{
      Item.find()
      .then((item)=>{
        res.json(item)
      }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
  },
  searchItems: (req, res) => {
    let { search } = req.query
    Item.find({ item: { $regex: `${search}`, $options: 'i' } })
      .then((item) => {
        res.json(item)
      }).catch(err => console.log(err))
  }
}

export default itemControllers 