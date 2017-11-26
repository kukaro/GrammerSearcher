var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var json = {
        "message": {
            "text": "아직 준비중입니다."
        }
    };
    res.send(json);
});

module.exports = router;
