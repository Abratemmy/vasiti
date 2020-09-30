import React, { Component } from 'react';
import './navigation.css';
import logo from '../../images/vasitiLogo.png';

import {NavLink} from 'react-router-dom';

export class Navigation extends Component {
    render() {
        return (
            <div className=" navigation">
                <div className="container first-navbar">
                    <div className="nav-logo">
                        <img src={logo}/>
                    </div>
                    <div className="first-nav-link">
                        <ul>
                            <li><NavLink to ='/about' className="navbar-navlink" >About us</NavLink></li>
                            <li><NavLink to ='/stores' className="navbar-navlink" >Stores</NavLink></li>
                            <li><NavLink to ='/contact' className="navbar-navlink" >Contact</NavLink></li>
                            <li><NavLink to ='/login' className="navbar-navlink" >Log in</NavLink></li>
                            {/* <li> */}
                                <div className="signuplink"><NavLink to ='/signup' className="navbar-navlink nav-signup " >Sign up</NavLink></div>
                        </ul>
                        
                    </div>
                </div>
                <hr className="nav-hr" />

                <div className="container second-navbar">
                    <ul>
                        <li><NavLink to='/marketplace' className="navbar-navlink">marketplace</NavLink> </li>
                        <li><NavLink to='/wholesales' className="navbar-navlink">Wholesale center</NavLink> </li>
                        <li><NavLink to='/sellercenter' className="navbar-navlink">Seller center</NavLink> </li>
                        <li><NavLink to='/services' className="navbar-navlink">Services</NavLink> </li>
                        <li><NavLink to='/internships' className="navbar-navlink">interships</NavLink> </li>
                        <li><NavLink to='/events' className="navbar-navlink">Events</NavLink> </li>
                    </ul>
                   
                </div>
                <hr className="nav-hr" />
            </div>
        )
    }
}

export default Navigation
