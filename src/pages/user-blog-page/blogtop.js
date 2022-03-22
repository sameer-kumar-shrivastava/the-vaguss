import React, {Component} from 'react';
import './blogtop.scss';

class blogtop extends Component {
    render() {
        return (
            <div className='blog-top'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default blogtop;