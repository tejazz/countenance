import React, { Component } from 'react';
import { ReactComponent as LinkedIn } from '../../assets/images/linkedin-logo.svg';
import {ReactComponent as GitHub} from '../../assets/images/github-logo.svg';
import { HomePage } from '../../data/pf-data.json';
import HomeImage from '../../assets/images/home-image.png';
import './home.scss';

class Home extends Component {
    componentDidMount() {
        localStorage.setItem("currentRoute", "home");
    }

    render() {
        const { FullName, BannerTitle, BannerDescription, WorkLinks } = HomePage;

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
                            <LinkedIn
                                className="home-detail_social--img"
                            />
                        </a>
                        <a href={WorkLinks.GitHub}>
                            <GitHub
                                className="home-detail_social--img"
                            />
                        </a>
                    </div>
                </div>
                <div className="home-face">
                    <img
                        src={HomeImage}
                        className="home-face_image"
                        alt="home-face"
                    />
                </div>
            </div>
        );
    }
}

export default Home;