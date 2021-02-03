module.exports = function(app) {

    app.get('/', (req, res) => {
        res.send("Welcome to the Covid-19 API!!");
    })

    app.use('/covid', require('./CovidRoutes'));

}