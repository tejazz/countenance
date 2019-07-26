import React from 'react';
import PfData from './app/data/pf-data.json';
import './App.scss';
import { Routes } from './routes.config.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavBar } from './app/components/nav-bar/nav-bar.js';

function App() {
  return (
    <Grid fluid style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      <Row>
        <Col xs={0} lg={1} md={1} style={{ padding: 0 }}>
          <NavBar />
        </Col>
        <Col xs={12} lg={11} md={11} style={{ padding: 0 }}>
          <Routes data={PfData} />
        </Col>
      </Row>
    </Grid>
  );
}

export default App;