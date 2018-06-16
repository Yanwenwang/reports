import React from 'react';
import moment from 'moment';
import { Grid, Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import SecondaryNavbar from '../../components/SecondaryNavbar/SecondaryNavbar';
import LayoutContainer from '../../components/Shared/LayoutContainer';
import './Report.scss';

const iconMap = {
    consider: <i className="report__icon report__icon--consider fa fa-exclamation-circle" aria-hidden="true"></i>,
    suspended: <i className="report__icon fa fa-exclamation-circle" aria-hidden="true"></i>,
    clear: <i className="report__icon fa fa-check-circle" aria-hidden="true"></i>,
    pending: <i className="report__icon fa fa-refresh" aria-hidden="true"></i>
};

class Report extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            selectedTab: 0
        };
    }

    componentWillMount() {
        const { getCandidate, id } = this.props;
        getCandidate(id);
    }

    handleToggleExpanded() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    handleToggleTab(index) {
        this.setState({
            selectedTab: index
        });
    }

    render() {
        const { candidate } = this.props;

        if (!candidate) {
            return <SecondaryNavbar>No data available.</SecondaryNavbar>
        }

        const { name, dob, ssn, dl_number, zipcode, phone, email, custom_id } = candidate;
        const { status, adjudication, assessment, geo, completed_at, updated_at, created_at } 
            = candidate.reports[this.state.selectedTab];
        const adjudicationValue = adjudication || '-';
        const assessmentValue = assessment || '-';

        const completed_at_display = completed_at ? moment(completed_at).format('MM/DD/YY hh:mmA') : '-';
        const created_at_display = created_at ? moment(created_at).format('MM/DD/YY hh:mmA') : '-';
        const turnaroundTime = completed_at 
            ? `${moment.duration(moment(completed_at).diff(moment(created_at))).asHours()} hours`
            : '-';
        const ssnDisplay = ssn.substr(7);

        return (
            <React.Fragment>
                <SecondaryNavbar>
                    <h4 className="report__secnav ">{name}</h4>
                </SecondaryNavbar>
                <SecondaryNavbar>
                    <ul>
                        {
                            candidate.reports.map((report, index) => {
                                const tabStyle = index === this.state.selectedTab 
                                    ? 'report__tab report__tab--active' 
                                    : 'report__tab';

                                const circleStyle = report.status === 'consider'
                                    ? 'report__circle report__circle--consider fa fa-circle'
                                    : 'report__circle fa fa-circle';

                                return (
                                    <li className={tabStyle} key={index} onClick={() => {
                                        this.handleToggleTab(index)
                                    }}>
                                        {moment(report.updated_at).format('L')}
                                        <i className={circleStyle} aria-hidden="true"></i>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </SecondaryNavbar>
                <LayoutContainer>
                    <Grid fluid>
                        <Row className="show-grid">
                            <Col md={4}>
                                <h5 className="report__tittle">Applicant details</h5>
                                <Table condensed>
                                    <tbody>
                                        <tr>
                                            <td className="report__prop">Name</td>
                                            <td>{name}</td>
                                        </tr>
                                        <tr>
                                            <td className="report__prop">Date of Birth</td>
                                            <td>
                                                {dob}
                                                <span className="report__age">{moment().diff(dob, 'years')} years old</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="report__prop">SSN</td>
                                            <td>
                                                <i className="report__circle report__circle--ssn fa fa-circle" aria-hidden="true"></i>
                                                <i className="report__circle report__circle--ssn fa fa-circle" aria-hidden="true"></i>
                                                <i className="report__circle report__circle--right report__circle--ssn fa fa-circle" aria-hidden="true"></i>
                                                <i className="report__circle report__circle--ssn fa fa-circle" aria-hidden="true"></i>
                                                <i className="report__circle report__circle--ssn fa fa-circle" aria-hidden="true"></i>
                                                <span className="report__ssn">{ssnDisplay}</span>
                                                <i className="report__check fa fa-check-circle" aria-hidden="true"></i>
                                            </td>
                                        </tr>
                                        { 
                                            this.state.expanded 
                                                ? (
                                                    <React.Fragment>
                                                        <tr>
                                                            <td className="report__prop">Driver License</td>
                                                            <td>{dl_number}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="report__prop">Zipcode</td>
                                                            <td>{zipcode}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="report__prop">Phone</td>
                                                            <td>{phone}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="report__prop">Email</td>
                                                            <td>{email}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="report__prop">Custom ID</td>
                                                            <td>{custom_id}</td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                                : null
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={4}>
                                <h5 className="report__tittle">Report details</h5>
                                <Table condensed>
                                    <tbody>
                                        <tr>
                                            <td className="report__prop">Status</td>
                                            <td>
                                                {iconMap[status]}
                                                <strong>{status[0].toUpperCase()}{status.slice(1)}</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="report__prop">Adjudication</td>
                                            <td>{adjudicationValue}</td>
                                        </tr>
                                        <tr>
                                            <td className="report__prop">Assessment</td>
                                            <td>{assessmentValue}</td>
                                        </tr>
                                        {
                                            this.state.expanded
                                            ? (
                                                <tr>
                                                    <td className="report__prop">Turnaround Time</td>
                                                    <td>{turnaroundTime}</td>
                                                </tr>
                                            )
                                            : null   
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={4}>
                                <Table condensed className="report__table">
                                    <tbody>
                                        <tr>
                                            <td className="report__prop">Package</td>
                                            <td>{candidate.reports[this.state.selectedTab].package}</td>
                                        </tr>
                                        <tr>
                                            <td className="report__prop">Geo</td>
                                            <td>{geo}</td>
                                        </tr>
                                        <tr>
                                            <td className="report__prop">Completed</td>
                                            <td>{completed_at_display}</td>
                                        </tr>
                                        {
                                            this.state.expanded
                                            ? (
                                                <tr>
                                                    <td className="report__prop">Created</td>
                                                    <td>{created_at_display}</td>
                                                </tr>
                                            )
                                            : null
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Grid>
                    <div className="report__border"></div>
                    <p className="report__message" onClick={() => { this.handleToggleExpanded() }}>
                        {this.state.expanded ? 'Show less details' : 'Show more details'}
                    </p>
                </LayoutContainer>
            </React.Fragment>
        );
    }
};

export default Report;