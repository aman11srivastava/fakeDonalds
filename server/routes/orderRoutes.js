import express from 'express';
import { createOrder, getAdminOrders, getMyOrders, getOrderDetails } from '../controllers/orderController.js';
import { isAuthenticated } from '../middlewares/auth.js'

const router = express.Router();

router.route("/createOrder").post(createOrder)
router.route("/myorders").get(isAuthenticated, getMyOrders)
router.route("/order/:id").get(isAuthenticated, getOrderDetails)
// Todo => Add Admin middleware
router.route("/admin/orders").get(isAuthenticated, getAdminOrders)

export default router;