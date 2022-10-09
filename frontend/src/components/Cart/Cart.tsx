import React from 'react'
import "../../styles/cart.scss";
import CartItem from './CartItem';

const Cart = () => {
  return (
    <section className='cart'>
        <main>
            <CartItem decrement={() => {}} increment={() => {}} title="Item 1" count={12}  />
            <CartItem decrement={() => {}} increment={() => {}} title="Item 2" count={12}  />
            <CartItem decrement={() => {}} increment={() => {}} title="Item 3" count={12}  />
        </main>
    </section>
  )
}

export default Cart
