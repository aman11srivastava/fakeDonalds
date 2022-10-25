import express from 'express';
import passport from 'passport';
import { myProfile } from '../controllers/userControllers.js';

const router = express.Router();

router.get('/googlelogin', passport.authenticate("google", {
    scope: ["profile"]
}))

router.get('/login', 
passport.authenticate("google"),
// {
//     scope: ['profile'],
//     successRedirect: process.env.FRONTEND_URL
// })
    (req, res, next) => {
        res.send("Login Successful")
    }
)

router.get("/me", myProfile)

export default router;