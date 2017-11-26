var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var json = {'type':'text'};
    console.log('keyboard',req.body);
    res.send(json);
});

module.exports = router;
