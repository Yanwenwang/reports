import actionTypes from '../constants/actionTypes';

export const initialState = {
    candidates: {},
    isLoading: false
};

const ACTION_HANDLERS = {
    [actionTypes.CANDIDATES.GET.CALL]: (state, action) => {
        return {
            ...state,
            isLoading: true
        };
    },
    [actionTypes.CANDIDATES.GET.SUCCESS]: (state, action) => {
        const candidatesArr = action.payload;

        const candidates = candidatesArr.reduce((map, candidate) => {
            map[candidate.id] = candidate;

            return map;
        }, {});

        return {
            ...state,
            candidates,
            isLoading: false
        };
    },
    [actionTypes.CANDIDATES.GET.FAIL]: (state, action) => {
        return {
            ...state,
            isLoading: false
        }
    },
    [actionTypes.CANDIDATE.GET.CALL]: (state, action) => {
        return {
            ...state,
            isLoading: true
        };
    },
    [actionTypes.CANDIDATE.GET.SUCCESS]: (state, action) => {
        const candidates = state.candidates;
        const candidate = action.payload;

        return {
            ...state,
            candidates: {
                ...candidates,
                [candidate.id]: candidate
            },
            isLoading: false
        };
    },
    [actionTypes.CANDIDATE.GET.FAIL]: (state, action) => {
        return {
            ...state,
            isLoading: false
        }
    }
};

export default function (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
};