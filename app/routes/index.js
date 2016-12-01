
module.exports = function(app){
    app.get('/', function (req, res) {
        var software = req.headers["user-agent"].split(";");
        var obj = {
            'ipadress': req.headers.host,
            'browser' : req.headers["user-agent"],
            'os': software[1],
            'language': req.headers["accept-language"]
        }
        res.json(obj)
        console.log(req.headers["user-agent"]);
    })
};
