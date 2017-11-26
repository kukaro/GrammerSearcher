var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var json = {'type': 'text'};
    res.send(json);
});

module.exports = router;
