import actionTypes from '../constants/actionTypes';

export const initialState = {
    candidates: [],
    isLoading: false
};

const ACTION_HANDLERS = {
    [actionTypes.CANDIDATES.GET.CALL]: (state, action) => {
        return {
            ...state,
            candidates: [],
            isLoading: true
        };
    },
    [actionTypes.CANDIDATES.GET.SUCCESS]: (state, action) => {
        const candidates = action.payload;

        return {
            ...state,
            candidates,
            isLoading: false
        };
    },
    [actionTypes.CANDIDATES.GET.FAIL]: (state, action) => {
        return {
            ...state,
            candidates: [],
            isLoading: false
        }
    }
};

export default function (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
};