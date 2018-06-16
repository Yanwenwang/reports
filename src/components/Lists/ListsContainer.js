import { connect } from 'react-redux';
import moment from 'moment';
import { getCandidates } from '../../actions/candidates';
import Lists from './Lists';

const mapStateToProps = (state, ownProps) => {
    const { candidates, isLoading } = state.candidates;
    const search = ownProps.location.search;
    const params = new URLSearchParams(search);
    const selectedStatus = params.get('status');
    // turn from object to array
    const reportsArr = Object.keys(candidates).reduce((arr, candidateId) => {
        const candidate = candidates[candidateId];

        const reports = candidate.reports.reduce((arr, report) => {
            arr.push({
                id: candidate.id,
                status: report.status,
                name: candidate.name,
                updated: moment(report.updated_at).format('L'),
                reportPackage: report.package,
                geo: report.geo
            });

            return arr;
        }, []);

        return arr.concat(reports);
    }, [])
        .filter((report) => report.status === selectedStatus || selectedStatus === 'all');

    // create map of reports
    const reportsMap = Object.keys(candidates).reduce((map, id) => {
        // loop though each candidate
        const candidate = candidates[id];
        candidate.reports.forEach((report) => {
            // loop through each report
            const status = report.status;

            if (map.hasOwnProperty(status)) {
                map[status]++;
            } else {
                map[status] = 1;
            }
        });

      return map;
    }, {});

    const filterArr = Object.keys(reportsMap).map((key) => ({ 
        status: key,
        display: `${key} reports`,
        count: reportsMap[key]
    }));

    filterArr.unshift({
        display: 'All reports',
        status: 'all',
        count: filterArr.reduce((count, filter) => {
            return count + filter.count;
        }, 0)
    })

    return {
        isLoading,
        reports: reportsArr,
        filters: filterArr,
        selectedStatus
    };
};

const mapDispatchToProps = {
    getCandidates
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);