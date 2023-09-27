import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import SidebarExample from './SidebarExample'
import MainExample from './Main'

import './App.css';


const App = () => (
  <Container fluid={true}  className="p-0">
                <Row noGutters>
                    <Col xs={2} sm={2} md={3} lg={4} xl={4}>      
                      <SidebarExample />
                    </Col>
                    <Col  xs={10} sm={10} md={9} lg={8} xl={8}>
                       <MainExample />
                    </Col> 
                </Row>

            </Container>
);

export default App;
