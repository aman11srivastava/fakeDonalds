import express from 'express';
import passport from 'passport';
import { getAdminUsers, logout, myProfile } from '../controllers/userControllers.js';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js';

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

router.get("/me", isAuthenticated, myProfile);
router.get("/logout", logout)
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAdminUsers)

export default router;