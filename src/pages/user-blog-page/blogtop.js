import React, {Component} from 'react';
import './blogtop.scss';
import BlogTopNavbar from './user-blog-navbar'

class blogtop extends Component {
    render() {
        return (
            <div className='blog-top'>
                <BlogTopNavbar />
            </div>
        )
    }
}

export default blogtop;