import React from 'react'
import { Link } from 'react-router-dom';
import { path } from '../../routes/routes';
import '../../styles/payment-success.scss';
import Lottie from 'react-lottie';
import SuccessAnimation from '../../assets/animations/success.json';

const AnimationOptions = {
    loop: false,
    autoplay: true,
    animationData: SuccessAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

const PaymentSuccess = () => {
    return (
        <section className='paymentsuccess'>
            <main>
                <h1>Order Confirmed</h1>
                <Lottie
                    options={AnimationOptions}
                    height={150}
                    width={150}
                />
                <p>Order Placed Successfully, You can check order status below</p>
                <Link to={path.MyOrders}>Check Status</Link>
            </main>
        </section>
    )
}

export default PaymentSuccess
