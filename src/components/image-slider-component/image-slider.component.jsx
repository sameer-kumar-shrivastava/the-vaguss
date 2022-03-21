import React, {useContext} from "react";
import './image-slider.styles.scss';
import { UserContext } from '../../userauth';

const ImageSlider = () => {
  const [loggedIn,setloggedIn] = useContext(UserContext);

    
    return(<div id="imageslider">
        <img
            className="home-image-1" 
            src='https://images.unsplash.com/photo-1610123598195-eea6b6be4c48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' 
            alt="Cover 1"/>
         {/* <img
            className="home-image-2" 
            src='https://images.unsplash.com/photo-1647163927506-399a13f9f908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' 
            alt="Cover Image 2"/>
            
          <img
            className="home-image-3" 
            src='https://images.unsplash.com/photo-1647119126202-d13a4263d40c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
            alt="Cover Image 1"/>        */}
          <div className="home-page-text">
            <h1 className="home-text-title">{loggedIn === true?'Dhanyawad, Toh chaliye shuru krte hai :)':'Abe Phle Login toh Kar...!!!!'}</h1>
            {/* <h1 className="home-text-subtitle-1">Has Became Easy</h1>
            <h3 className="home-text-subtitle-2">with COMPANY</h3> */}
            <button className="home-start-button">Start Now</button>
          </div>
         </div>)
}
export default ImageSlider;
