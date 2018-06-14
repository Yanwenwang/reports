import { connect } from 'react-redux';
import { getFakeCandidates } from '../../actions/candidates';
import Lists from './Lists';

const mapStateToProps = (state) => {
    const { candidates, isLoading } = state.candidates;

    // turn from object to array
    const candidatesArr = Object.keys(candidates).map((id) => candidates[id]);
   
    return {
        isLoading,
        candidates: candidatesArr
    };
};

const mapDispatchToProps = {
    getCandidates: getFakeCandidates
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);