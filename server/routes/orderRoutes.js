import express from 'express';
import { createOrder } from '../controllers/orderController.js';
import { isAuthenticated } from '../middlewares/auth.js'

const router = express.Router();

router.route("/createOrder").post( createOrder)

export default router;