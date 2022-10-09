import React from 'react'
import { motion } from 'framer-motion';
import { DEFAULT_ANIMATIONS, DEFAULT_IMAGE, menuType } from '../../utils/utils';

interface MenuCardProps {
    menu: menuType
    handler: (id: number) => void
    delay?: number
}

const MenuCard = (props: MenuCardProps) => {
    const { menu, handler, delay = 0 } = props;
    const {image, itemNumber, price, title, } = menu;

    return (
        <motion.div {...DEFAULT_ANIMATIONS} transition={{delay}} className='menuCard'>
            <div>Item {itemNumber}</div>
            <main>
                <img src={image ? image : DEFAULT_IMAGE} alt={title}/>
                <h5>₹ {price}</h5>
                <p>{title}</p>
                <button onClick={() => handler(itemNumber)}>Buy Now</button>
            </main>

        </motion.div>
    )
}

export default MenuCard
