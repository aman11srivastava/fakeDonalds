export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || 'Internal Server Error';
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}

export const catchAsyncError = (func) => (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next)
}