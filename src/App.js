import React, { Component } from 'react';
import './App.scss';
import PortfolioData from './app/data/pf-data.json';
import { Routes } from './routes.config.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavBar } from './app/components/nav-bar/nav-bar.js';
import { ReactComponent as MobileNav } from './app/assets/images/navigate.svg';
import NavDrawer from './app/components/nav-drawer/nav-drawer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primaryColor: "#333",
      secondaryColor: "#FFC30B",
      mainJsonData: PortfolioData,
      navBarState: false
    };

    this.changeSecondaryColor = this.changeSecondaryColor.bind(this);
    this.modifyMainJsonData = this.modifyMainJsonData.bind(this);
  }

  toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ ...this.state, [side]: open });
  };

  changeSecondaryColor(colorValue) {
    this.setState({
      secondaryColor: colorValue
    });
  }

  modifyMainJsonData(newJson) {
    this.setState({
      mainJsonData: newJson
    });
  }

  render() {
    return (
      <Grid fluid style={{ margin: 0, padding: 0, overflow: "hidden" }}>
        <Row>
          <Col xs={0} lg={1} md={0} style={{ padding: 0 }}>
            <NavBar primaryColor={this.state.primaryColor} secondaryColor={this.state.secondaryColor} mainJsonData={this.state.mainJsonData} />
          </Col>
          <Col xs={12} lg={11} md={12} style={{ padding: 0 }}>
            <MobileNav
              className='app-sidenav'
              onClick={() => this.setState({ navBarState: !this.state.navBarState })}
            />
            <NavDrawer
              {...this.props}
              navBarState={this.state.navBarState}
              toggleDrawer={this.toggleDrawer}
            />

            <Routes
              primaryColor={this.state.primaryColor} secondaryColor={this.state.secondaryColor} changeSecondaryColor={this.changeSecondaryColor} mainJsonData={this.state.mainJsonData} modifyMainJsonData={this.modifyMainJsonData}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;