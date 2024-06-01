import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </Card.Body>
        </Card>
    );
};

export default MyCard;
