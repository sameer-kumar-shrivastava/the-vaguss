import React from "react";
import './explore-page.style.scss';
import { NavLink } from 'react-router-dom';


const ExplorePage =() => {
    return(
        <div className='explore-container' id="explore">
            <h5 className="explore-top-text">showing results for the 'LOCATION'</h5>
            <div className="explore-card">
                <div className="explore-card-picnic"><img className="explore-picnic-img" src='https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' /><div className="explore-card-over-text">Picnic Spots</div></div>
                <div className="explore-card-road"><img className="explore-road-img" src='https://images.unsplash.com/photo-1514823898861-b1babeb0351d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' /><div className="explore-card-over-text">Awesome Roads</div></div>
                <div className="explore-card-spots"><img className="explore-spots-img" src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' /><div className="explore-card-over-text">Top Spots</div></div>
                <div className="explore-card-places"><img className="explore-places-img" src='https://images.unsplash.com/photo-1587999633485-2c16737226c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' /><div className="explore-card-over-text">Busy Places</div></div>
            </div>
            <p className="explore-footer-text"><NavLink className='explore-footer-text-nav' to="/signin">show more >>>> </NavLink></p>
        </div>
    );
    }
    export default ExplorePage;