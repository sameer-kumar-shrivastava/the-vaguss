import React from 'react';
import './navbar.styles.scss';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return(
            <div className='navbar-container'>
                <h1><NavLink to="/">Company</NavLink></h1>
                    <nav>                        
                        <ul>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section4"
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
                                    to="text"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>Explore</li>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li><button><NavLink to="/signin">Login | Signup</NavLink></button></li>
                            <li className='hamburger-menu-icon'>☰</li>
                        </ul>
                    </nav>
            </div>
    );
}
export default Navbar;
