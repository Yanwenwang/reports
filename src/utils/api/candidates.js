const baseUrl = 'https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates';

export const getCandidates = () => {
    return fetch(baseUrl, {
        method: 'GET'
    });
};

export default {
    getCandidates
};