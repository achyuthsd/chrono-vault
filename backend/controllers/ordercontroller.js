import Order from "../models/orders.js"



export const postOrder = async (req,res)=>{
    const order = req.body
const newOrder = new Order(order)

try {
    await newOrder.save()
    res.status(200).json({ message: "oki" });
} catch (error) {
    console.log('error')
}
}


