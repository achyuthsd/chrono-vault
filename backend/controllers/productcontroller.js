import Product from "../models/product.js"

export const getProduct = async (req,res)=>{
    try{
    const pdt = await Product.find({})
    res.status(200).json(pdt)
    }
    catch(error){
        console.log(error)
    }
}

export const postProduct = async (req,res)=>{
    const product = req.body
const newProduct = new Product(product)

try {
    await newProduct.save()
    
} catch (error) {
    console.log('error')
}
}

export const getProductId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}
