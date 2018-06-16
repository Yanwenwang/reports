import { connect } from 'react-redux';
import moment from 'moment';
import { getCandidates } from '../../actions/candidates';
import Home from './Home';

const mapStateToProps = (state) => {
    const { candidates, isLoading } = state.candidates;

    // create map of reports
    const reportsMap = Object.keys(candidates).reduce((map, id) => {
        // loop though each candidate
        const candidate = candidates[id];
        candidate.reports.forEach((report) => {
            // loop through each report
            const status = report.status;
            const data = status === 'pending' 
                ? {
                    name: candidate.name,
                    'estimated delivery': moment(report.estimated_completed_at).fromNow()
                }
                : {
                    name: candidate.name,
                    updated: moment(report.updated_at).format('l')
                };

            if (map.hasOwnProperty(status)) {
                map[status].push(data);
            } else {
                map[status] = [data];
            }
        });

      return map;
    }, {});

    const reports = Object.keys(reportsMap)
        .map((group) => {
            const reports = reportsMap[group];
            return {
                group: group.charAt(0).toUpperCase() + group.slice(1), // capitalize first letter
                columns: reports.length === 0 ? [] : Object.keys(reports[0]),
                reports: reports.slice(0, 5)
            };
        });

    return {
        isLoading,
        reports
    };
};

const mapDispatchToProps = {
    getCandidates
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);