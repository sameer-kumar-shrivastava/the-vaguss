import React from 'react';
import './dashboard-page.styles.scss';

import ImageSlider from '../../components/image-slider-component/image-slider.component';
import BlogPage from '../blog-page/blog-page.component';
import {dummyText} from '../../components/section-component/DummyText';
import Section from '../../components/section-component/Section';
import Text from '../../components/test';

const Dashboard = () => {
    return(<div> 
      
      <div><ImageSlider/></div>
      <div><BlogPage/></div>
      {/* <Section
          title='Section 1'
          subtitle={dummyText}
          dark={true}
          id='section1'
        />
      <Section
          title='Section 2'
          subtitle={dummyText}
          dark={true}
          id='section2'
        />
      <Section
          title='Section 3'
          subtitle={dummyText}
          dark={true}
          id='section3'
        />
      <Section
          title='Section 4'
          subtitle={dummyText}
          dark={true}
          id='section4'
        /> */}
      {/* <Text id='text'
          dark={true}
          />   */}
     </div> )
}

export default Dashboard;