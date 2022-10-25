import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../routes/routes";
import '../../styles/app.scss';
import Lottie from 'react-lottie';
import NotFoundAnimation from '../../assets/animations/404.json'

const AnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFoundAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

const NotFound = () => {
    return (
        <section className="notFound">
            <main>
                <div>
                    <Lottie options={AnimationOptions} />
                </div>
                <p>Page not found, click below to go to home page.</p>
                <Link to={path.Home}>Go to Home</Link>
            </main>
        </section>
    );
};

export default NotFound;