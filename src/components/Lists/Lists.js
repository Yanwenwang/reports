import React from 'react';
import ReactTable from "react-table";
import moment from 'moment';
import SecondaryNavbar from '../../components/SecondaryNavbar/SecondaryNavbar';
import LayoutContainer from '../../components/Shared/LayoutContainer';
import './Lists.scss';

const iconMap = {
    consider: <i className="fa fa-exclamation-circle" aria-hidden="true"></i>,
    suspended: <i className="fa fa-refresh" aria-hidden="true"></i>
};

const columns = [{
    Header: 'STATUS',
    id: 'status',
    accessor: d => d.reports[0].status,
    Cell: (cell) => {
        return (
            <div>
                {iconMap[cell.value]}
                <span>{cell.row.status}</span>
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
    accessor: (d) => moment(d.reports.updated_at).format('l')
},{
    Header: 'PACKAGE',
    id: 'package', 
    accessor: (d) => d.reports[0].package
},{
    Header: 'GEO',
    id: 'geo',
    accessor: (d) => d.reports[0].geo
}];

class Lists extends React.Component {
    componentWillMount() {
        const { getCandidates } = this.props;
        getCandidates();
    }

    render() {
        const { candidates, isLoading } = this.props;

        return (
            <React.Fragment>
                <SecondaryNavbar>
                    Filter
                </SecondaryNavbar>
                <LayoutContainer>
                    <ReactTable 
                        className="-striped -highlight"
                        defaultPageSize={10}
                        data={candidates}
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