import React, { useState } from 'react'
import "../../styles/header.scss";
import {Link} from 'react-router-dom';

import {IoFastFoodOutline} from 'react-icons/io5';
import {FiShoppingCart, FiLogIn} from 'react-icons/fi';
import {FaUser} from 'react-icons/fa';

import {motion} from 'framer-motion';
import { path } from '../../routes/routes';
import Login from '../Auth/Login';

const Header = ({isAuthenticated = false}) => {
  const [show, setShow] = useState<boolean>(true);


  return (
    <nav>
        <motion.div initial={{x: "-100%"}} whileInView={{x: 0}}>
            <IoFastFoodOutline/>
        </motion.div>
        <div>
            <Link to={path.Home}>Home</Link>
            <Link to={path.Contact}>Contact</Link>
            <Link to={path.About}>About</Link>
            <Link to={path.Cart}><FiShoppingCart/></Link>
            <FaUser style={{fontSize: '1.5rem'}} onClick={() => setShow(!show)}/>

            {show && <Login show={show} setShow={setShow}/>}
            {/* {!isAuthenticated && <Link to={path.Login}><FiLogIn/></Link>} */}
            {isAuthenticated && <Link to={path.Profile}><FaUser/></Link>}
            {/* <Link to={isAuthenticated ? path.Profile : path.Login}>{isAuthenticated ? <FaUser/> : <FiLogIn/>}</Link> */}
        </div>
    </nav>
  )
}

export default Header
