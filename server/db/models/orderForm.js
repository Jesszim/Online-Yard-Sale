import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  billingAddress: {
    type: {},
    required: true
  },
  billingInfo: {
    type: {},
  },
  shippingAddress: [{
    type: String,
  }],
  cart: {
    type: {},
    required: true
  },
  total: {
    type: Number,
    // required: true
  },
})

const OrderForm = mongoose.model("OrderForm", userSchema)

export default OrderForm