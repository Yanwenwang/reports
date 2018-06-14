import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import SecondaryNavbar from '../../components/SecondaryNavbar/SecondaryNavbar';
import LayoutContainer from '../../components/Shared/LayoutContainer';
import './Report.scss';

const iconMap = {
    consider: <i className="card__icon--consider fa fa-exclamation-circle" aria-hidden="true"></i>,
    suspended: <i className="card__icon fa fa-exclamation-circle" aria-hidden="true"></i>,
    clear: <i className="card__icon fa fa-check-circle" aria-hidden="true"></i>,
    pending: <i className="card__icon fa fa-refresh" aria-hidden="true"></i>
};

export const Report = ({ candidate }) => {
    if (!candidate) {
        return <SecondaryNavbar>No Data</SecondaryNavbar>
    }

    const { name, dob, ssn, dl_number, zipcode, phone, email, custom_id } = candidate;

    return (
        <React.Fragment>
            <SecondaryNavbar>{name}</SecondaryNavbar>
            <SecondaryNavbar>Tabs</SecondaryNavbar>
            <LayoutContainer>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col md={4}>
                            <h5 className="report__tittle">Applicant details</h5>
                            <Table condensed>
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <td>Date of Birth</td>
                                        <td>{dob}</td>
                                    </tr>
                                    <tr>
                                        <td>SSN</td>
                                        <td>{ssn}</td>
                                    </tr>
                                    <tr>
                                        <td>Driver License</td>
                                        <td>{dl_number}</td>
                                    </tr>
                                    <tr>
                                        <td>Zipcode</td>
                                        <td>{zipcode}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>{phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{email}</td>
                                    </tr>
                                    <tr>
                                        <td>Custom ID</td>
                                        <td>{custom_id}</td>
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
            </LayoutContainer>
        </React.Fragment>
    );
};

export default Report;