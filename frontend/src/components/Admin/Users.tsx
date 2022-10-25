import React from 'react'
import '../../styles/table.scss';
import { DEFAULT_IMAGE } from '../../utils/utils';

// Todo -> Replace Table headers from JSX to an array from utils

const Users = () => {
  return (
    <section className='tableClass'>
      <main>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Role</th>
                        <th>Joined</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test id</td>
                        <td>Aman Srivastava</td>
                        <td><img src={DEFAULT_IMAGE} alt="uSER"/></td>
                        <td>Admin</td>
                        <td>19-11-1997</td>
                    </tr>
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default Users
