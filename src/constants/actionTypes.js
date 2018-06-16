const actionTypes = {
    CANDIDATES: {
        GET: {
            CALL: 'CANDIDATES.GET.CALL',
            SUCCESS: 'CANDIDATES.GET.SUCCESS',
            FAIL: 'CANDIDATES.GET.FAIL'
        }
    },
    CANDIDATE: {
        GET: {
            CALL: 'CANDIDATE.GET.CALL',
            SUCCESS: 'CANDIDATE.GET.SUCCESS',
            FAIL: 'CANDIDATE.GET.FAIL'
        }
    },
    ROUTER: {
        LOCATION_CHANGE: '@@router/LOCATION_CHANGE'
    }
};

export default actionTypes;