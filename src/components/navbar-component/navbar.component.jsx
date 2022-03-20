import React,{useContext} from 'react';
import './navbar.styles.scss';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";
import { UserContext } from '../../userauth';


const Navbar = () => {
    const [loggedIn,setloggedIn] = useContext(UserContext);

    const handleclick = (event) =>{
        event.preventDefault();
        setloggedIn('LoggedOut')
        alert("Logged Out Sucessfully");

    }

    const handleclick1 = (event) =>{
        event.preventDefault();
        setloggedIn('LoggedIN')
        alert("Logged In Sucessfully");
    }
    return(
            <div className='navbar-container'>
                <h1><NavLink className='navbar-logo' to="/">{loggedIn}</NavLink></h1>
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

                                <li><button onClick={handleclick}>Log out</button></li>
                                <li><button onClick={handleclick1}>Login</button></li>
                        </ul>
                    </nav>
            </div>
    );
}
export default Navbar;
