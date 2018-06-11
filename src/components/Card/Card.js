import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './Card.scss';

export const Card = ({ number, icon, status, children }) => {
    return (
        <div className="card__container">
            <div className="card__header">
                <h1 className="card__number">122</h1>
                <i className="card__icon fa fa-refresh" aria-hidden="true"></i>
                <span className="card__status">Pending</span>
            </div>
            <Table condensed className="card__table">
                <thead>
                    <tr>
                        <th className="card__table-header">Name</th>
                        <th className="card__table-header">Estimated Delivery</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Claudia Stone</td>
                        <td>6 to 7 days</td>
                    </tr>
                    <tr>
                        <td>Claudia Stone</td>
                        <td>6 to 7 days</td>
                    </tr>
                </tbody>
            </Table>
            <Button bsStyle="link" block>
                Show Pending Reports
            </Button>
        </div>
    );
};

export default Card;