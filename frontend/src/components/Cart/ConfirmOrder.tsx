import React from 'react'
import '../../styles/confirm-order.scss'
import Input from '../common/Input'

const ConfirmOrder = () => {
    return (
        <section className="confirmOrder">
            <main>
                <h1>Confirm Order</h1>
                <form>
                    <Input label={"Cash On Delivery"} onChange={() => {}} value="" type="radio" name="payment" />
                    <Input label={"Prepaid"} onChange={() => {}} value="" type="radio" name="payment" />
                    <button type='submit'>Place Order</button>
                </form>
            </main>
        </section>
    )
}

export default ConfirmOrder
