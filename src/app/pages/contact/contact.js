import React, { Component } from 'react';
import { ReactComponent as Call } from '../../assets/images/call.svg';
import { ReactComponent as Mail } from '../../assets/images/mail.svg';
import { ContactPage } from '../../data/pf-data.json';
import './contact.scss';

class Contact extends Component {
    componentDidMount() {
        localStorage.setItem("currentRoute", "contact");
    }

    render() {
        const { Mobile, Email } = ContactPage;
        return (
            <div className="contact-container">
                <div className="contact-header">
                    <h3 className="contact-header_title">Contact</h3>
                    <p className="contact-header_caption">Here are the ways you can reach out to me</p>
                </div>
                <div className="contact-details">
                    <div className="contact-details_group">
                        <div className="contact-details_item">
                            <div className="contact-details_item--image-main">
                                <Mail
                                    className="contact-details_item--image"
                                />
                            </div>
                            <p className="contact-details_item--email">{Email}</p>
                        </div>
                        <div className="contact-details_item">
                            <div className="contact-details_item--image-main">
                                <Call
                                    className="contact-details_item--image"
                                />
                            </div>
                            <p className="contact-details_item--call">{Mobile.slice(0, 2).map((item) => item + " ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;