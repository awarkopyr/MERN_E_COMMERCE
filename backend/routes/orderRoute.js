import express from "express"
import { placeOrder, placeOrderStripe , placeOrderRazorPay , allOrders, userOrders, updateStatus } from "../controllers/orderController.js"
import adminAuth from '../middleware/adminAuth.js'
import authUser from "../middleware/auth.js"


const orderRouter = express.Router()

/////Admin//////
orderRouter.post('/list', adminAuth ,allOrders)
orderRouter.post('/status', adminAuth ,updateStatus)

///User//////

orderRouter.post('/place', authUser  ,placeOrder)
orderRouter.post('/stripe', authUser  ,placeOrderStripe)
orderRouter.post('/razorpay', authUser  ,placeOrderRazorPay)


orderRouter.post('/userorders',authUser, userOrders)


export default orderRouter