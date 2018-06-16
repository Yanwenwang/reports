import React from 'react';
import ReactTable from "react-table";
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import moment from 'moment';
import SecondaryNavbar from '../../components/SecondaryNavbar/SecondaryNavbar';
import LayoutContainer from '../../components/Shared/LayoutContainer';
import './Lists.scss';

const iconMap = {
    consider: <i className="lists__icon lists__icon--consider fa fa-exclamation-circle" aria-hidden="true"></i>,
    suspended: <i className="lists__icon fa fa-exclamation-circle" aria-hidden="true"></i>,
    clear: <i className="lists__icon fa fa-check-circle" aria-hidden="true"></i>,
    pending: <i className="lists__icon fa fa-refresh" aria-hidden="true"></i>
};

const columns = [{
    Header: 'STATUS',
    id: 'status',
    accessor: d => d.status,
    Cell: (cell) => {
        return (
            <div>
                <span className="lists__icon">{iconMap[cell.value]}</span>
                <span className="lists__status">{cell.row.status.charAt(0).toUpperCase() + cell.row.status.slice(1)}</span>
            </div>
        );
    }
}, {
    Header: 'NAME',
    id: 'name',
    accessor: (d) => d.name
},{
    Header: 'UPDATED',
    id: 'updated', 
    accessor: (d) => d.updated
},{
    Header: 'PACKAGE',
    id: 'package', 
    accessor: (d) => d.reportPackage
},{
    Header: 'GEO',
    id: 'geo',
    accessor: (d) => d.geo
}];

class Lists extends React.Component {
    componentWillMount() {
        const { getCandidates } = this.props;
        getCandidates();
    }

    render() {
        const { reports, filters, isLoading, selectedStatus } = this.props;
        const selectedFilter = filters.find((filter) => filter.status === selectedStatus) || filters[0];
        const titleComponent = (
            <React.Fragment>
                <span>{selectedFilter.display.charAt(0).toUpperCase() + selectedFilter.display.slice(1)}</span>
                <span className="lists__num lists__num--left">{selectedFilter.count}</span>
            </React.Fragment>
        );

        return (
            <React.Fragment>
                <SecondaryNavbar>
                    <div className="lists__dropdown-container">
                        <DropdownButton
                            className="lists__dropdown"
                            title={titleComponent}
                            key={0}
                            id="filter">
                            {
                                filters.map((filter, index) => {
                                    const { display, status, count } = filter;
                                    const href = `/lists?status=${status.toLowerCase()}`;
                                    const isActive = selectedStatus === status;

                                    return (
                                        <MenuItem key={index}
                                            eventKey={index}
                                            href={href}
                                            active={isActive}
                                        >
                                            {display.charAt(0).toUpperCase() + display.slice(1)}
                                            <span className="lists__num">{count}</span>
                                        </MenuItem>            
                                    );
                                })
                            }
                        </DropdownButton>
                    </div>
                </SecondaryNavbar>
                <LayoutContainer>
                    <ReactTable 
                        className="-striped -highlight"
                        defaultPageSize={10}
                        data={reports}
                        noDataText="No data available."
                        columns={columns}
                        getTrProps={(state, rowInfo) => {
                            return {
                                onClick: () => this.props.history.push(`/lists/report/${rowInfo.row._original.id}`)
                            }
                        }}
                    />
                </LayoutContainer>
            </React.Fragment>
        );
    }
};

export default Lists;