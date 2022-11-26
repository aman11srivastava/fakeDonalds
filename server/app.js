import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import { connectPassport } from './utils/Provider.js';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import orderRoutes from './routes/orderRoutes.js'

const app = express();

dotenv.config({
    path: "./config/config.env"
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({
    extended: true
}));

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();

app.use('/api/', userRoutes);
app.use('/api/', orderRoutes);

app.use(errorMiddleware)

export default app;

