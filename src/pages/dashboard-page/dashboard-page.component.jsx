import React from 'react';
import './dashboard-page.styles.scss';

import ImageSlider from '../../components/image-slider-component/image-slider.component';
import BlogPage from '../blog-page/blog-page.component';
import ExplorePage from '../explore-page/explore-page.component';
import AboutPage from '../about-page/about-page.component';
import ContactPage from '../contact-page/contact-page.component';

const Dashboard = () => {
    return(<div className='dashboard-page-container'> 
      <span><ImageSlider id='imageslider'/></span>
      {/* <div className="blog-page-container" id="blog">Hello Blog</div>       */}
      <span><BlogPage id="blog"/></span>
      <span><ExplorePage id='explore'/></span>
      <span><AboutPage id="about"/></span>
      <span><ContactPage id='contact' /></span>  
         
     </div> )
}

export default Dashboard;