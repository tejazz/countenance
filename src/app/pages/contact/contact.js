import React, {Component} from 'react';
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
                    Details
                </div>
            </div>
        );
    }
}

export default Contact;