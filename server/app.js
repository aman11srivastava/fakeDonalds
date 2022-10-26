import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import { connectPassport } from './utils/Provider.js';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

const app = express();

dotenv.config({
    path: "./config/config.env"
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(cookieParser());

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();

app.use('/api/', userRoutes)

app.use(errorMiddleware)

export default app;

