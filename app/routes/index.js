module.exports = function (application) {
    application.get('/test', function (req, res) {
        res.send("test");
    });

    application.post('/api', function (req, res) {
        application.controllers.index.conversation(application, req, res);
    });
};
