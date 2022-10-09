import React from 'react'
import { motion } from 'framer-motion';
import '../../styles/menu.scss';
import MenuCard from './MenuCard';
import { menuType } from '../../utils/utils';

const menu: menuType = {
    itemNumber: 1,
    price: 100,
    title: "Cheese Burger"
}

const Menu = () => {

    const addToCartHandler = (itemNumber: number) => {
        console.log(itemNumber)
    }

    return (
        <section id='menu'>
            <h1>Menu</h1>
            <div>
                <MenuCard menu={menu} delay={0.2} handler={addToCartHandler} />
                <MenuCard menu={menu} delay={0.5} handler={addToCartHandler} />
                <MenuCard menu={menu} delay={0.8} handler={addToCartHandler} />
            </div>
        </section>
    )
}

export default Menu
