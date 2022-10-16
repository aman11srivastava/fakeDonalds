import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/cart.scss";
import Article from '../common/Article';
import CartItem from './CartItem';

const Cart = () => {
  return (
    <section className='cart'>
      <main>
        <CartItem decrement={() => { }} increment={() => { }} title="Item 1" count={12} />
        <CartItem decrement={() => { }} increment={() => { }} title="Item 2" count={12} />
        <CartItem decrement={() => { }} increment={() => { }} title="Item 3" count={12} />
        <article>
          <Article text='Sub Total' value={1000} />
          <Article text='Tax' value={1000 * 0.18} />
          <Article text='Shipping Charges' value={200}/>
          <Article text='Total' value={1380} />
          <Link to={"/shipping"}>Checkout</Link>
        </article>
      </main>
    </section>
  )
}

export default Cart
