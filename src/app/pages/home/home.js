import React, { Component } from 'react';
import { ReactComponent as LinkedIn } from '../../assets/images/linkedin-logo.svg';
import { ReactComponent as GitHub } from '../../assets/images/github-logo.svg';
import HomeImage from '../../assets/images/home-image.png';
import './home.scss';

class Home extends Component {
    componentDidMount() {
        localStorage.setItem("currentRoute", "home");
    }

    render() {
        const { FullName, BannerTitle, BannerDescription, WorkLinks } = this.props.mainJsonData.HomePage;

        return (
            <div className="home-container">
                <div className="home-detail">
                    <div className="home-detail_name" style={{color: this.props.secondaryColor}}>
                        <p className="home-detail_name--first">{FullName.substring(0, FullName.indexOf(' '))}</p>
                        <p className="home-detail_name--last">{FullName.substring(FullName.lastIndexOf(' '), FullName.length)}</p>
                        <p className="home-detail_title" style={{color: this.props.secondaryColor}}>{BannerTitle}</p>
                        <p className="home-detail_description" style={{color: this.props.secondaryColor}}>{BannerDescription}</p>
                    </div>
                    <div className="home-detail_social">
                        <a href={WorkLinks.LinkedIn}>
                            <LinkedIn
                                className="home-detail_social--img"
                                style={{fill: this.props.secondaryColor}}
                            />
                        </a>
                        <a href={WorkLinks.GitHub}>
                            <GitHub
                                className="home-detail_social--img"
                                style={{fill: this.props.secondaryColor}}
                            />
                        </a>
                    </div>
                </div>
                <div className="home-face"  style={{backgroundColor: this.props.secondaryColor}}>
                    <div className="color-picker">
                        <div
                            className="color-item"
                            style={{ backgroundColor: "#FFC30B" }}
                            onClick={() => this.props.changeSecondaryColor("#FFC30B")}
                        >
                        </div>
                        <div
                            className="color-item"
                            style={{ backgroundColor: "#57A0D3" }}
                            onClick={() => this.props.changeSecondaryColor("#57A0D3")}
                        >
                        </div>
                        <div
                            className="color-item"
                            style={{ backgroundColor: "#98FB98" }}
                            onClick={() => this.props.changeSecondaryColor("#98FB98")}
                        >
                        </div>
                        <div
                            className="color-item"
                            style={{ backgroundColor: "#FE7F9C" }}
                            onClick={() => this.props.changeSecondaryColor("#FE7F9C")}
                        >
                        </div>
                    </div>
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