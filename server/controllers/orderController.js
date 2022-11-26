import { catchAsyncError } from '../middlewares/errorMiddleware.js';
import { Order } from '../models/Order.js';
import ErrorHandler from '../utils/errorHandler.js';

export const createOrder = catchAsyncError(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
    } = req.body;

    const user = "req.user._id";

    const orderOptions = {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
        user,
    };

    await Order.create(orderOptions);

    res.status(201).json({
        success: true,
        message: "Order Placed Successfully via Cash On Delivery",
    });
});

export const getMyOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find({
        user: req?.user?._id
    }).populate("user", "name")
    res.status(200).json({
        success: true,
        orders
    })
});

export const getOrderDetails = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate("user", "name")
    if (!order) {
        return next(new ErrorHandler("Invalid Order Id", 404))
    }
    res.status(200).json({
        success: true,
        order
    })
})

export const getAdminOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find({}).populate("user", "name")
    res.status(200).json({
        success: true,
        orders
    })
});
