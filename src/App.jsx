import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Name from './assets/product.js';
import Price from './assets/price.jsx';
import Description from './src/Description.jsx';
import Image from './src/Image.jsx';
import product from './assets/product.js';

const App = () => {
    const firstName = "YourFirstName"; // Replace with your first name

    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Card>
                        <Image imageUrl={product.imageUrl} />
                        <Card.Body>
                            <Name />
                            <Price />
                            <Description />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <p className="text-center mt-4">Hello, {firstName ? firstName : "there!"}</p>
        </Container>
    );
};

export default App;
