import React from 'react'
import '../../styles/app.scss';
import Lottie from 'react-lottie';
import LoaderAnimation from '../../assets/animations/Loader.json';

const AnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: LoaderAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

const Loader = () => {
  return (
    <div className='loader'>
      <Lottie options={AnimationOptions} />
    </div>
  )
}

export default Loader
