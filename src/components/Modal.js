import Modal from 'react-modal'
import { useState } from 'react'
import '../modal.css';
import Login from './Login';
import Signup from './Signup'
import styled from 'styled-components';
Modal.setAppElement('#root')

const UserModal = ({setUser, setLoggedIn, setToken, setClicked2, setStatus}) => {
    const [loginStateModal, showLoginStateModal] = useState(false)
    const [registerStateModal, showRegisterStateModal] = useState(false)
    function openLoginModal() { showLoginStateModal(true); }
    function openRegisterModal() { showRegisterStateModal(true); }
    function closeLoginModal() { showLoginStateModal(false); }
    function closeRegisterModal() { showRegisterStateModal(false); }

    return (
        <NavBar className="imageBox">
                <button onClick={openLoginModal} id="Login">Login</button>
            <div>
                    <Modal isOpen={loginStateModal} onRequestClose={closeLoginModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                        <Login setter={setUser} setToken={setToken} setLoggedIn={setLoggedIn} setClicked={setClicked2} setStatus={setStatus}/>	
                    </Modal>
            </div>
            <div>
                <Modal isOpen={registerStateModal} onRequestClose={closeRegisterModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                    <Signup setter={setUser} setToken={setToken} setLoggedIn={setLoggedIn} setClicked={setClicked2} setStatus={setStatus} />
                </Modal>
            </div>
                <button onClick={openRegisterModal} id="Signin">Sign Up</button>
        </NavBar>
    )
}

export default UserModal

const NavBar = styled.div`
	display: flex;
	background: rgb(19,19,19);
	background: linear-gradient(0deg, rgba(19,19,19,1) 0%, rgba(81,81,81,1) 85%);
	justify-content: center;
	width: 100vw;
	button{
		border: none;
		background: transparent;
		color: 2;
	}

`