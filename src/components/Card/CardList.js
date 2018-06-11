import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Card from './Card';
import './CardList.scss';

export const CardList = ({ number, icon, status, children }) => {
    return (
        <Grid fluid>
            <Row className="show-grid">
                <Col md={4}>
                    <Card />
                </Col>
                <Col md={4}>
                    <Card />
                </Col>
                <Col md={4}>
                    <Card />
                </Col>
            </Row>
        </Grid>
    );
};

export default CardList;