const axios = require('axios');

async function apiCall() {
    const url = `https://covidtracking.com/api/states`;

    const response = await axios.get(url);

    return response.data;
}

module.exports = {
    apiCall: apiCall
}