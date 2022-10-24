import React from 'react'
import { Link } from 'react-router-dom';
import { path } from '../../routes/routes';
import '../../styles/profile.scss';

const Profile = () => {
  return (
    <section className='profile'>
        <main>
            <img src='' alt='User'/>
            <h5>Aman Srivastava</h5>
            <div>
                <Link to={path.AdminDashboard}>Dashboard</Link>
            </div>
            <div>
                <Link to={path.MyOrders}>My Orders</Link>
            </div>
            <button>Logout</button>
        </main>
    </section>
  )
}

export default Profile
