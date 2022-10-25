import AdminOrders from "../components/Admin/AdminOrders";
import Dashboard from "../components/Admin/Dashboard";
import Users from "../components/Admin/Users";
import Login from "../components/Auth/Login";
import Cart from "../components/Cart";
import ConfirmOrder from "../components/Cart/ConfirmOrder";
import PaymentSuccess from "../components/Cart/PaymentSuccess";
import Shipping from "../components/Cart/Shipping";
import Home from "../components/Home";
import Orders from "../components/Orders/Orders";
import Profile from "../components/Profile/Profile";

export enum path {
    Home = "/",
    Cart = "/cart",
    Shipping = "/shipping",
    ConfirmOrder = "/confirm-order",
    Contact = "/contact",
    About = "/about",
    Login = "/login",
    Profile = "/me",
    Success = "/success",
    MyOrders = '/myorders',
    AdminDashboard = '/admin/dashboard',
    SingleOrder = "/order",
    AdminOrders = '/admin/orders',
    AdminUsers = '/admin/users'
}

export const Routes = [
    {
        path: path.Home,
        component: Home
    },
    {
        path: path.Cart,
        component: Cart
    },
    {
        path: path.Shipping,
        component: Shipping
    },
    {
        path: path.ConfirmOrder,
        component: ConfirmOrder
    },
    {
        path: path.Success,
        component: PaymentSuccess
    },
    {
        path: path.Login,
        component: Login
    },
    {
        path: path.Profile,
        component: Profile
    },
    {
        path: path.MyOrders,
        component: Orders
    },
    {
        path: path.AdminDashboard,
        component: Dashboard
    },
    {
        path: path.AdminUsers,
        component: Users
    },
    {
        path: path.AdminOrders,
        component: AdminOrders
    }
];

export default Routes;