import React, { Component } from 'react';
import './App.scss';
import PortfolioData from './app/data/pf-data.json';
import { Routes } from './routes.config.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavBar } from './app/components/nav-bar/nav-bar.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primaryColor: "#333",
      secondaryColor: "#FFC30B",
      mainJsonData: PortfolioData
    };

    this.changeSecondaryColor = this.changeSecondaryColor.bind(this);
    this.modifyMainJsonData = this.modifyMainJsonData.bind(this);
  }

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
          <Col xs={0} lg={1} md={1} style={{ padding: 0 }}>
            <NavBar primaryColor={this.state.primaryColor} secondaryColor={this.state.secondaryColor} mainJsonData={this.state.mainJsonData} />
          </Col>
          <Col xs={12} lg={11} md={11} style={{ padding: 0 }}>
            <Routes primaryColor={this.state.primaryColor} secondaryColor={this.state.secondaryColor} changeSecondaryColor={this.changeSecondaryColor} mainJsonData={this.state.mainJsonData} modifyMainJsonData={this.modifyMainJsonData}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;