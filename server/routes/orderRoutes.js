import express from 'express';
import { createOrder, getAdminOrders, getMyOrders, getOrderDetails, processOrder } from '../controllers/orderController.js';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js'

const router = express.Router();

router.route("/createOrder").post(createOrder)
router.route("/myorders").get(isAuthenticated, getMyOrders)
router.route("/order/:id").get(isAuthenticated, getOrderDetails)
router.route("/admin/orders").get(isAuthenticated, authorizeAdmin, getAdminOrders)
router.route('/admin/order/:id').get(isAuthenticated, authorizeAdmin, processOrder)

export default router;