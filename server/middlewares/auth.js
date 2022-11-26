import ErrorHandler from '../utils/errorHandler.js';
import { userRoleEnum } from '../utils/utils.js';

export const isAuthenticated = (req, res, next) => {
    const token = req.cookies["connect.sid"];
    if (!token) {
        return next(new ErrorHandler("Not Logged In", 401))
    }
    next();
}

export const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== userRoleEnum.ADMIN) {
        return next(new ErrorHandler("Only admin users can access this route", 405))
    }
    next();
}