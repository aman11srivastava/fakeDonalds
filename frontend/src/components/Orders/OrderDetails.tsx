import React from 'react'
import '../../styles/orderDetails.scss';
import { RUPEE_SYMBOL } from '../../utils/utils';
import Article from '../common/Article';
import OrderInfo from './OrderInfo';

const OrderDetails = () => {
    return (
        <section className='orderDetails'>
            <main>
                <h1>Order Details</h1>
                <OrderInfo title='Shipping' boldText='Address' value='Random Address' />
                <OrderInfo title='Contact' boldText='Name' value="Aman Srivastava" />
                <OrderInfo boldText='Phone' value="+91 1234567890" />
                <OrderInfo title='Status' boldText='Order Status' value="In Process" />
                <OrderInfo boldText='Placed at' value="19-11-2022" />
                <OrderInfo boldText='Delivered at' value="Noida" />
                <OrderInfo title='Payment' boldText='Payment Method' value="C.O.D" />
                <OrderInfo boldText='Payment Ref' value="#qiuwqijsaokjo2ien2012" />
                <OrderInfo boldText='Paid At' value="wokmsk" />
                <OrderInfo title='Amount' boldText='Items Total' value={`${RUPEE_SYMBOL}9327`} />
                <OrderInfo boldText='Shipping Charges' value={`${RUPEE_SYMBOL}200`} />
                <OrderInfo boldText='Tax' value={`${RUPEE_SYMBOL}900`} />
                <OrderInfo boldText='Total Amount' value={`${RUPEE_SYMBOL}12000`} />

                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{12}</span> x{" "}
                            <span>{232}</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{fontWeight: 800}}>Sub Total</h4>
                        <div style={{fontWeight: 800}}>{RUPEE_SYMBOL} {2132}</div>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default OrderDetails
