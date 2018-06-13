import { connect } from 'react-redux';

import { getFakeCandidates } from '../../actions/candidates';

import Lists from './Lists';

const mapStateToProps = (state) => {
    const { candidates, isLoading } = state.candidates;
   
    return {
        isLoading,
        candidates
    };
};

const mapDispatchToProps = {
    getCandidates: getFakeCandidates
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);