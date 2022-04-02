import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Menu from '../Menu/Menu';

const Menubar = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Menu</h1>
                    </Col>
                    <Col xs={9}>
                        <Menu></Menu>
                    </Col>
                    <Col>
                        <h4>Order Summary</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Menubar;