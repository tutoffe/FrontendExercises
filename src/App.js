import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import PhoneListContainer from './components/PhoneListContainer';
import PhoneDetailComponent from './components/PhoneDetailComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Phone Catalog App</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
            <Col xs={12} sm={8}>
              <PhoneListContainer />
            </Col>
            <Col xs={12} sm={4}>
              <PhoneDetailComponent />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
