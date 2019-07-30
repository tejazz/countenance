import React, { Component } from 'react';
import PfData from './app/data/pf-data.json';
import './App.scss';
import { Routes } from './routes.config.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavBar } from './app/components/nav-bar/nav-bar.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primaryColor: "#333",
      secondaryColor: "#FFC30B"
    };

    this.changeSecondaryColor = this.changeSecondaryColor.bind(this);
  }

  changeSecondaryColor(colorValue) {
    this.setState({
      secondaryColor: colorValue
    });
  }

  render() {
    return (
      <Grid fluid style={{ margin: 0, padding: 0, overflow: "hidden" }}>
        <Row>
          <Col xs={0} lg={1} md={1} style={{ padding: 0 }}>
            <NavBar primaryColor={this.state.primaryColor} secondaryColor={this.state.secondaryColor} />
          </Col>
          <Col xs={12} lg={11} md={11} style={{ padding: 0 }}>
            <Routes primaryColor={this.state.primaryColor} secondaryColor={this.state.secondaryColor} changeSecondaryColor={this.changeSecondaryColor} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;