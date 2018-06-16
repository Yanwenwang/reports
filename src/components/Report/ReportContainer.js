import { connect } from 'react-redux';
import { getCandidate } from '../../actions/candidates';
import Report from './Report';

const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id, 10);
    const { candidates, isLoading } = state.candidates;

    return {
        isLoading,
        id,
        candidate: candidates[id]
    };
};

const mapDispatchToProps = {
    getCandidate
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);