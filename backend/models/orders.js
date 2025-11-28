import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phno:{
        type:Number,
        required:true

    },
    address:{
        type:String,
        required:true
    },
    item:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Order = mongoose.model('Order',orderSchema)

export default Order