import React from "react";
import './contact-page.styles.scss';


const ContactPage =() => {
    return(
        <div className='contact-container' id="contact">
            <div className="contact-card-container">
                <h3 className="contact-title">Write Us</h3>
                <div className="contact-box-container">
                    <div className="contact-box-left-container">
                        <label className='contact-name-label'>Your Full Name</label>
                        <input className='contact-name-input'  type='text'  name='contact-name' id='contact-name' ></input>
                        <label className='contact-mail-label'>Active Mail Address</label>
                        <input className='contact-mail-input'  type='email' name='contact-email' id='contact-email' ></input>
                        <label className='contact-phone-label'>Phone Number</label>
                        <input className='contact-phone-input'  type='number' name='contact-phone' id='contact-phone' ></input>
                        <label className='contact-checkbox-label'><input className='contact-checkbox-input' type="checkbox"/>Subscribe for mailbox</label>
                    </div>
                    <div className="contact-box-right-container">
                        <input className='contact-problem-input' type='text' placeholder='Describe your problem' />
                    </div>
                </div>
                <button className="contact-submit-button">Submit</button>
            </div>
        </div>
    );
    }
    export default ContactPage;