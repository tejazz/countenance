import React, { Component } from 'react';
import LinkedIn from '../../assets/images/linkedin-logo.svg';
import GitHub from '../../assets/images/github-logo.svg';
import { HomePage } from '../../data/pf-data.json';
import './home.scss';

class Home extends Component {
    render() {
        const { FullName, BannerTitle, BannerDescription, WorkLinks } = HomePage;
        console.log(this.props);
        return (
            <div className="home-container">
                <div className="home-detail">
                    <div className="home-detail_name">
                        <p className="home-detail_name--first">{FullName.substring(0, FullName.indexOf(' '))}</p>
                        <p className="home-detail_name--last">{FullName.substring(FullName.lastIndexOf(' '), FullName.length)}</p>
                        <p className="home-detail_title">{BannerTitle}</p>
                        <p className="home-detail_description">{BannerDescription}</p>
                    </div>
                    <div className="home-detail_social">
                        <a href={WorkLinks.LinkedIn}>
                            <img
                                src={LinkedIn}
                                alt="linkedin"
                                className="home-detail_social--img"
                            />
                        </a>
                        <a href={WorkLinks.GitHub}>
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