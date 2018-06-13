import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import './Report.scss';

export const Report = () => {
    return (
        <div>
            <Grid fluid>
                <Row className="show-grid">
                    <Col md={4}>
                        <h5 className="report__tittle">Applicant details</h5>
                        <Table condensed>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>Jacob Francis</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>SSN</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Driver License</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Zipcode</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Custom ID</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={4}>
                        <h5 className="report__tittle">Report details</h5>
                        <Table condensed>
                            <tbody>
                                <tr>
                                    <td>Status</td>
                                    <td>
                                        <i className="report__icon--consider fa fa-exclamation-circle" aria-hidden="true"></i>
                                        <strong>Consider</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Adjudication</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Assessment</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Turnaround Time</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={4}>
                        <Table condensed>
                            <tbody>
                                <tr>
                                    <td>Package</td>
                                    <td>Freelance operator</td>
                                </tr>
                                <tr>
                                    <td>Geo</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Completed</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Created</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
            <div className="report__border"></div>
            <p className="report__message">Show Less Details</p>
        </div>
    );
};

export default Report;