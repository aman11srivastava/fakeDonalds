import Cart from "../components/Cart";
import ConfirmOrder from "../components/Cart/ConfirmOrder";
import PaymentSuccess from "../components/Cart/PaymentSuccess";
import Shipping from "../components/Cart/Shipping";
import Home from "../components/Home";

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
    MyOrders = '/myorders'
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
    }
];

export default Routes;