import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/crown.svg';

import {auth} from   '../../components/firebase/firebase.utilis';


import './header.styles.scss';
const Header=({currentUser})=>(
    <div className="header">
        <Link className="logoContainer" to="/">
        <Logo className="Logo"/>

        </Link>
        <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        
        <Link className="option" to="/Contact">CONTACT</Link>
        {
           
            currentUser ? 
            (<div className="option" onClick={ () => auth.signOut()}>SignOut</div> )
            : ( <Link className="option" to="/SignIn">SignIn</Link>)
        }
        </div>
    </div>
)


export default Header;