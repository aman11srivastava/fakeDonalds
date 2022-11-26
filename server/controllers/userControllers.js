import { catchAsyncError } from '../middlewares/errorMiddleware.js';
import {User} from '../models/User.js';

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