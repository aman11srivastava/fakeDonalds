import React from 'react'
import { DEFAULT_IMAGE } from '../../utils/utils';

interface CartItemProps {
    count: number
    title: string
    img?: string
    increment: () => void;
    decrement: () => void;
}

const CartItem = (props: CartItemProps) => {
    const { decrement, increment, title, count, img = DEFAULT_IMAGE } = props;
    return (
        <div className='cartItem'>
            <div>
                <h4>{title}</h4>
                <img src={img} alt={title}/>
            </div>
            <div>
                <button>-</button>
                <input type={"number"} readOnly value={count}/>
                <button>+</button>
            </div>
        </div>
    )
}

export default CartItem
