import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../routes/routes'
import '../../styles/dashboard.scss';
import Box from '../common/Box';
import {Doughnut} from 'react-chartjs-2';
import {Chart, Tooltip, ArcElement, Legend} from 'chart.js';
import { OrderStatus } from '../../utils/utils';

const SHOW_RUPEE_SYMBOL: boolean = true; 

Chart.register(Tooltip, ArcElement, Legend)

const data = {
    labels: [OrderStatus.PREPARING, OrderStatus.SHIPPED, OrderStatus.DELIVERED],
    datasets: [
        {
            label: "No. of Orders",
            data: [12, 23, 42],
            backgroundColor: ['blue', 'red', 'green'],
            borderColor: ['red', 'green', 'blue'],
        }
    ]
}

const Dashboard = () => {
  return (
    <section className='dashboard'>
        <main>
            <article>
                <Box title={"Users"} value={123}/>
                <Box title={"Orders"} value={123}/>
                <Box showRupeeSymbol={SHOW_RUPEE_SYMBOL} title={"Income"} value={123}/>
            </article>

            <section>
                <div>
                    <Link to={path.AdminOrders}>View Orders</Link>
                    <Link to={path.AdminUsers}>View Users</Link>
                </div>
                <aside>
                    <Doughnut data={data}/>
                </aside>
            </section>

        </main>
    </section>
  )
}

export default Dashboard
