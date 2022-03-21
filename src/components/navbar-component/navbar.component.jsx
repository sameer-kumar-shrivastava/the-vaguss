import React,{useContext, useState} from 'react';
import './navbar.styles.scss';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";
import { UserContext } from '../../userauth';


const Navbar = () => {
    const [loggedIn,setloggedIn] = useContext(UserContext);
    const [MenuList, setMenulist] = useState(false);

    const handleLogout = (event) =>{
        event.preventDefault();
        if(loggedIn===true){
        setloggedIn(false)
        alert("Logged Out Sucessfully");}
        else{
            alert("Please SignIn to Logout")
        }

    }

    // const handleclick1 = (event) =>{
    //     event.preventDefault();
    //     setloggedIn(true)
    //     alert("Logged In Sucessfully");
    // }
    const toggleMenu = (event) => {
        setMenulist(!MenuList);
    }

    
    return(
            <div className='navbar-container'>
                <h1><NavLink className='navbar-logo' to="/"> Company </NavLink></h1>
                    <nav>                        
                        <ul id='menu-list' className= {MenuList===true?'menu-list':'menu-list-closed'}>
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
                    
                    <li> {loggedIn===false?
                    <button><NavLink className='navbar-login-button-text' to="/signin">
                    Login | Signup                                
                                    </NavLink></button>:<button onClick={handleLogout} className='navbar-login-button-text'>Signout</button>}</li>
                                               
                                

                             </ul>
                    </nav>
                <h1 className='hamburger-menu-icon' onClick={toggleMenu}>☰</h1>
            </div>
           
    );

}
export default Navbar;
