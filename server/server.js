import app from "./app.js";
import { connectDB } from "./config/database.js";
import Razorpay from 'razorpay';

connectDB()

export const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

app.get('/', (req, res, next) => {
    res.send("Working")
})

app.listen(process.env.PORT, () => console.log('Server started running on port ' + process.env.PORT + `, in ${process.env.NODE_ENV} mode.`))
