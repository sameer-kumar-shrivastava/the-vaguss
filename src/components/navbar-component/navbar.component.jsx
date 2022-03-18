import React from 'react';
import './navbar.styles.scss';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";

const Navbar = () => {
    return(
            <div className='navbar-container'>
                <h1><NavLink className='navbar-logo' to="/">Company</NavLink></h1>
                    <nav>                        
                        <ul>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="imageslider"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="blog"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="explore"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Explore
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Contact
                                </Link>
                            </li>
                    
                    <li> <button><NavLink className='navbar-login-button-text' to="/signin">
                                    Login | Signup                                
                                    </NavLink></button></li>
                                               
                                <li className='hamburger-menu-icon'>☰</li>
                        </ul>
                    </nav>
            </div>
    );
}
export default Navbar;
