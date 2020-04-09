import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import {logoutRequest} from '../actions';

import Logo from './../assets/image/logo-platzi-video-BW2.png';
import userIcon from './../assets/image/icons8-usuario-círculo-64.png';


const Header = (props) => {
    const {user} = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({})
    }
    return(

        <header className="header">
            <Link to="/">
                <img className="header__img" src={Logo}/>
            </Link>
            
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ?
                        <img src={gravatar(user.email)} alt={user.email}/> 
                        : <img src={userIcon} alt="userIcon"/>
                    }
                    
                    <p>perfil</p>
                </div>
                <ul>
                    {hasUser ?
                        <li><Link to="/">{user.email}</Link></li> 
                        : null
                    }

                    {hasUser ?
                        <li><a href="#logout" onClick={handleLogout}>Cerrar Sesion</a></li> 
                        : <li><Link to="/login">Iniciar Sesion</Link></li>
                    }
                    
                    
                </ul>
            </div>
        </header>

    );
}
const mapStateToProps = state => {
    return{
        user: state.user,
    }
}

const mapDispatchToProps ={
    logoutRequest,
}
//export default Header;
export default connect (mapStateToProps,mapDispatchToProps)(Header);