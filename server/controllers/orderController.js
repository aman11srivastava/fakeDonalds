import { catchAsyncError } from '../middlewares/errorMiddleware.js';
import { Order } from '../models/Order.js';
import ErrorHandler from '../utils/errorHandler.js';
import { orderStatusEnum } from '../utils/utils.js';
import crypto from 'crypto';
import { Payment } from '../models/Payment.js';
import { razorpayInstance } from '../server.js';

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

    const user = req.user?._id;

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

export const createOnlineOrder = catchAsyncError(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
    } = req.body;

    const user = req.user?._id;

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

    const paymentOptions = {
        amount: Number(totalAmount) * 100,
        currency: "INR",
    };
    const order = await razorpayInstance.orders.create(paymentOptions);
    res.status(200).json({
        success: true,
        order,
        orderOptions
    })
})

export const paymentVerification = catchAsyncError(async (req, res, next) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, orderOptions } = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET).update(body).digest("hex");
    const isSignAuthentic = razorpay_signature === expectedSignature;
    if (isSignAuthentic) {
        const payment = await Payment.create({
            razorpay_order_id, razorpay_payment_id, razorpay_signature
        })
        await Order.create({
            ...orderOptions,
            paidAt: new Date(Date.now()),
            paymentInfo: payment?._id
        })
        res.status(201).json({
            success: true,
            message: `Order placed succefully. Payment Id: ${payment?._id}`
        })
    }
    else {
        return next(new ErrorHandler("Payment Failed", 400));
    }
})

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

export const processOrder = catchAsyncError(async (req, res, next) => {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (!order) {
        return next(new ErrorHandler("Invalid Order Id", 404));
    }
    else if (order.orderStatus === orderStatusEnum.PREPARING) {
        order.orderStatus = orderStatusEnum.SHIPPED;
    }
    else if (order.orderStatus === orderStatusEnum.SHIPPED) {
        order.orderStatus = orderStatusEnum.DELIVERED;
        order.deliveredAt = new Date(Date.now());
    }
    else if (order.orderStatus === orderStatusEnum.DELIVERED) {
        return next(new ErrorHandler("Order has already been delivered", 400))
    }
    await order.save();
    return res.status(200).json({
        success: true,
        message: "Order status updated successfully"
    })
})