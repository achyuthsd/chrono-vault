import express from "express"
import { getProduct,postProduct,getProductId } from "../controllers/productcontroller.js"

const router = express.Router()

router.get("/",getProduct)
router.post("/",postProduct)

router.get("/:id",getProductId);


export default router