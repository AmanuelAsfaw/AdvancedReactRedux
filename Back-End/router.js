module.exports = function(app) {
    app.get('/new', function(req, res, next){
        res.send(['waterbottle', 'phone', 'paper']);
    });
}