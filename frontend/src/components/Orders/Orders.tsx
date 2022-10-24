import React from 'react'
import { Link } from 'react-router-dom';
import { path } from '../../routes/routes';
import '../../styles/table.scss';
import { RUPEE_SYMBOL } from '../../utils/utils';
import {AiOutlineEye} from 'react-icons/ai';

const Orders = () => {
  return (
    <section className='tableClass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test id</td>
                        <td>Pending</td>
                        <td>3</td>
                        <td>{RUPEE_SYMBOL} 1000</td>
                        <td>C.O.D</td>
                        <td>
                            <Link to={`${path.SingleOrder}/whshshsswsldxn`}>
                                <AiOutlineEye/>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default Orders
