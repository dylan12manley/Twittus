import React from 'react';
import Header from "./components/Header";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import { Row, Col, Container } from 'react-bootstrap';
import Suggestions from "./components/Suggestions";
import NewTweetControl from './components/NewTweetControl';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>

    <Header/>
      <Container>
        <Row>
          <Col md="auto"><Profile/></Col>
          <Col md="auto">
          <NewTweetControl/>
          <Feed/></Col>
          <Col md="auto"><Suggestions/></Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
