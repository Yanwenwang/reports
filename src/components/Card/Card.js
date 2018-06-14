import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import './Card.scss';

const iconMap = {
    consider: <i className="card__icon card__icon--consider fa fa-exclamation-circle" aria-hidden="true"></i>,
    suspended: <i className="card__icon fa fa-exclamation-circle" aria-hidden="true"></i>,
    clear: <i className="card__icon fa fa-check-circle" aria-hidden="true"></i>,
    pending: <i className="card__icon fa fa-refresh" aria-hidden="true"></i>
};

const calculateGroupStyle = (group) => {
    if (group === 'Consider') {
        return 'card__status card__status--consider';
    }

    return 'card__status';
};

export const Card = ({ card }) => {
    const { group, columns, reports } = card;
    const groupStyle = calculateGroupStyle(group);

    return (
        <div className="card__container">
            <div className="card__header">
                <h1 className="card__number">{reports.length}</h1>
                {iconMap[group.toLowerCase()]}
                <span className={groupStyle}>{group}</span>
            </div>
            {
                reports.length === 0
                    ? null
                    : (
                        <React.Fragment>
                            <Table condensed className="card__table">
                                <thead>
                                    <tr>
                                        {
                                            columns.map((column) => {
                                                return (
                                                    <th className="card__table-header" key={column}>{column}</th>
                                                );
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reports.map((report, index) => {
                                            return (
                                                <tr key={index}>
                                                    {
                                                        columns.map((column) => {
                                                            return (
                                                                <td key={column}>{report[column]}</td>
                                                            );
                                                        })
                                                    }
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </Table>
                            <Button bsStyle="link" block>
                                <Link to={{
                                    pathname: '/lists',
                                    search: `?status=${group}`
                                }}>Show {group} Reports</Link>
                            </Button>
                        </React.Fragment>
                    )
            }
        </div>
    );
};

export default Card;