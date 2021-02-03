const covidServices = require('../services/CovidServices');

async function getStatesCurrent(req, res, next) {

    try {
        const statesCurrent = await covidServices.apiCall();
        console.log(statesCurrent);

        // return res.status(200).send(statesCurrent);
        return res.render("index", { statesCurrent: statesCurrent });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getStatesCurrent: getStatesCurrent
}