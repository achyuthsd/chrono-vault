import express from "express"
import { postUser } from "../controllers/registercontroller.js"

const router = express.Router()

// router1.get("/",getProduct)
router.post("/",postUser)

export default router