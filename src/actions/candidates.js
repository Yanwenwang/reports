import actionTypes from '../constants/actionTypes';
import { fakeCandidatesData } from '../constants/fakeData';
import api from '../utils/api/candidates';

export const getCandidates= () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CANDIDATES.GET.CALL
        });
        
        api.getCandidates()
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch({
                    type: actionTypes.CANDIDATES.GET.SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                dispatch({
                    type: actionTypes.CANDIDATES.GET.FAIL,
                    payload: error
                });
            });
    };
};


export const getFakeCandidates = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CANDIDATES.GET.CALL
        });
        
        const promise = Promise.resolve(fakeCandidatesData);

        return promise
            .then((data) => {
                dispatch({
                    type: actionTypes.CANDIDATES.GET.SUCCESS,
                    payload: data
                });
            });
    }
};