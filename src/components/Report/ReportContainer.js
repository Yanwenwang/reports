import { connect } from 'react-redux';
import Report from './Report';

const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id, 10);
    const { candidates, isLoading } = state.candidates;

    return {
        isLoading,
        candidate: candidates[id]
    };
};

export default connect(mapStateToProps, null)(Report);