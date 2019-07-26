import React, { Component } from 'react';
import { ReactComponent as Call } from '../../assets/images/call.svg';
import { ReactComponent as Mail } from '../../assets/images/mail.svg';
import './contact.scss';

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <div className="contact-header">
                    <h3 className="contact-header_title">Contact</h3>
                    <p className="contact-header_caption">Here are the ways you can reach out to me</p>
                </div>
                <div className="contact-details">
                    <div className="contact-details_group">
                        <div className="contact-details_item">
                            <Mail />
                        </div>
                        <div className="contact-details_item">
                            <Call />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;