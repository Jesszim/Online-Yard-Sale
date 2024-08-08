import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
item:{
  type: String,
  required: true,
},
description:{
  type: String,
  required: true,
},
price:{
  type: Number,
  required: true,
},
image: {
  type: String,
  default: ''
}
})

const Item = mongoose.model("Item", itemSchema)

export default Item