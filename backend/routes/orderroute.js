import express from "express"
import { postOrder } from "../controllers/ordercontroller.js"

const router = express.Router()


router.post("/",postOrder)



export default router