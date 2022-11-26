import { catchAsyncError } from '../middlewares/errorMiddleware.js';
import {User} from '../models/User.js';
import { Order } from '../models/Order.js';
import { orderStatusEnum } from '../utils/utils.js';

export const myProfile = (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user
    })
};

export const logout = (req, res, next) => {
    req.session.destroy((err) => {
        if(err) {
            return next(err);
        }
        res.clearCookie("connect.sid");
        res.status(200).json({
            success: true,
            message: "Logout successful"
        })
    })
}

export const getAdminUsers = catchAsyncError(async (req, res, next) => {
    const users = await User.find({});
    return res.status(200).json({
        success: true,
        users
    })
});

export const getAdminStats = catchAsyncError(async (req, res, next) => {
    const usersCount = await User.countDocuments();
    const orders = await Order.find({});
    const preparingOrders = orders.filter(order => order.orderStatus === orderStatusEnum.PREPARING);
    const shippedOrders = orders.filter(order => order.orderStatus === orderStatusEnum.SHIPPED);
    const deliveredOrders = orders.filter(order => order.orderStatus === orderStatusEnum.DELIVERED);
    let totalIncome = 0;

    orders.forEach(order => {
        totalIncome = totalIncome + order.totalAmount;
    });

    return res.status(200).json({
        success: true,
        usersCount,
        ordersCount: {
            total: orders.length,
            preparing: preparingOrders.length,
            shipped: shippedOrders.length,
            delivered: deliveredOrders.length
        },
        totalIncome
    })
});