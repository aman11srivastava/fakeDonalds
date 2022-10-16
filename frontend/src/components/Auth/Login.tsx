import React from 'react'
import '../../styles/login.scss';
import Modal from 'react-modal';
import { FaGoogle } from 'react-icons/fa';

interface LoginProps {
    show: boolean;
    setShow: (value: boolean) => void;
}

const Login = (props: LoginProps) => {
    const { show, setShow } = props;

    const open = () => {
        setShow(true);
    }

    const close = () => {
        setShow(false);
    }
    const style = {
        content: {
            height: 70,
            width: 200,
            left: '88%',
            top: '7%',
            right: '2%'
        }
    }

    return (
        <Modal style={style} isOpen={true} onRequestClose={close}>
            <button className='google'>Login With Google <FaGoogle/></button>
        </Modal>
    )
}

export default Login
