import React, {Component} from 'react';
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
                    </div>
                </div>
                <div className="home-face">

                </div>
            </div>
        );
    }
}

export default Home;