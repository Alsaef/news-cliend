// eslint-disable-next-line no-unused-vars
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../LeftNave/LeftNav';
import RightNav from '../Rightnav/RightNav';
import { Outlet } from 'react-router-dom';
const InterFace = () => {
    return (
        <div>
                   <Container>
      <Row>
        <Col lg={3}>
         <LeftNav></LeftNav>
        </Col>
        <Col lg={6}>
           <Outlet></Outlet>
        </Col>
        <Col lg={3}>
            <RightNav></RightNav>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default InterFace;