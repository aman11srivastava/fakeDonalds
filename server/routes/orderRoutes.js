import express from 'express';
import { createOnlineOrder, createOrder, getAdminOrders, getMyOrders, getOrderDetails, paymentVerification, processOrder } from '../controllers/orderController.js';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js'

const router = express.Router();

router.route("/createOrder").post(isAuthenticated, createOrder)
router.route("/createOnlineOrder").post(isAuthenticated, createOnlineOrder)
router.route("/paymentVerification").post(isAuthenticated, paymentVerification)
router.route("/myorders").get(isAuthenticated, getMyOrders)
router.route("/order/:id").get(isAuthenticated, getOrderDetails)
router.route("/admin/orders").get(isAuthenticated, authorizeAdmin, getAdminOrders)
router.route('/admin/order/:id').get(isAuthenticated, authorizeAdmin, processOrder)

export default router;