import React, { Component } from 'react';
import { ReactComponent as Call } from '../../assets/images/call.svg';
import { ReactComponent as Mail } from '../../assets/images/mail.svg';
import './contact.scss';
import { TitleHelmet } from '../../components/helmet/helmet';

class Contact extends Component {
    componentDidMount() {
        localStorage.setItem("currentRoute", "contact");
    }

    render() {
        const { Mobile, Email } = this.props.mainJsonData.ContactPage;
        return (
            <div className="contact-container">
                <div className="contact-header">
                    <h3 className="contact-header_title" style={{ color: this.props.secondaryColor }}>Contact</h3>
                    <p className="contact-header_caption" style={{ color: this.props.secondaryColor }}>Here are the ways you can reach out to me</p>
                </div>
                <div className="contact-details">
                    <div className="contact-details_group">
                        <div className="contact-details_item">
                            <div className="contact-details_item--image-main" style={{  border: `2px inset ${this.props.secondaryColor}`}}>
                                <Mail
                                    className="contact-details_item--image"
                                    style={{ fill: this.props.secondaryColor }}
                                />
                            </div>
                            <p className="contact-details_item--email" style={{ backgroundColor: this.props.secondaryColor }}>{Email}</p>
                        </div>
                        <div className="contact-details_item">
                            <div className="contact-details_item--image-main" style={{  border: `2px inset ${this.props.secondaryColor}`}}>
                                <Call
                                    className="contact-details_item--image"
                                    style={{ fill: this.props.secondaryColor }}
                                />
                            </div>
                            <p className="contact-details_item--call" style={{ backgroundColor: this.props.secondaryColor }}>{Mobile.slice(0, 2).map((item) => item + " ")}</p>
                        </div>
                    </div>
                </div>

                <TitleHelmet title={"Countenance - Contact Details"}/>
            </div>
        );
    }
}

export default Contact;