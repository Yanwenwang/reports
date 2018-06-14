import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Card from './Card';
import './CardList.scss';

export const CardList = ({ cards }) => {
    const cardsComponent = cards.map((card) => {
        return (
            <Col md={4} key={card.group}>
                <Card card={card} />
            </Col>
        );
    });

    return (
        <Grid fluid>
            <Row className="show-grid">
                {cardsComponent}
            </Row>
        </Grid>
    );
};

export default CardList;