import React from 'react'
import "../../styles/home.scss";
import { motion } from 'framer-motion';
import Menu from './Menu';
import { DEFAULT_ANIMATIONS } from '../../utils/utils';

const Home = () => {
    console.log('bbbbb')
    return (
        <>
            <section className='home'>
                <div>
                    <motion.h1 {...DEFAULT_ANIMATIONS}>FakeDonald's</motion.h1>
                    <motion.p {...DEFAULT_ANIMATIONS} transition={{ delay: 0.2 }}>Wish I could love it</motion.p>
                </div>
                <motion.a transition={{ delay: 0.4 }} initial={{ y: "-100%", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} href='#menu'>Explore Menu</motion.a>
            </section>
            <Menu />
        </>
    )
}

export default Home
