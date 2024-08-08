import OrderForm from "../db/models/orderForm.js";

const cartControllers = {
  checkout:(req,res) =>{
    let {fullname, email, billingAddress,billingInfo, shippingAddress, cart, total} = req.body
    let data = {fullname, email, billingAddress,billingInfo, shippingAddress, cart, total}
    let newOrderForm = new OrderForm(data)
    newOrderForm.save().then(()=>{
      OrderForm.find()
      .then((order)=>{
        res.json(order)
      }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
  },
}
export default cartControllers