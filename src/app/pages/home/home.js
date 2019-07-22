import React, { Component } from 'react';
import LinkedIn from '../../assets/images/linkedin-logo.svg';
import GitHub from '../../assets/images/github-logo.svg';
import './home.scss';

class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="home-container">
                <div className="home-detail">
                    <div className="home-detail_name">
                        <p className="home-detail_name--first">Tarique</p>
                        <p className="home-detail_name--last">Ejaz</p>
                        <p className="home-detail_title">Full Stack Software Development Engineer</p>
                        <p className="home-detail_description">Fast paced, highly enthusiastic, believes that the world is multiple shades of grey rather than one. Loves a challenge and makes sure to deliver solutions to interesting real-world problems.</p>
                    </div>
                    <div className="home-detail_social">
                        <a href="#">
                            <img
                                src={LinkedIn}
                                alt="linkedin"
                                className="home-detail_social--img"
                            />
                        </a>
                        <a href="#">
                            <img
                                src={GitHub}
                                alt="github"
                                className="home-detail_social--img"
                            />
                        </a>
                    </div>
                </div>
                <div className="home-face">

                </div>
            </div>
        );
    }
}

export default Home;