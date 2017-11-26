var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    console.log(req);
    var json = {
        "message": {
            "text": "아직 준비중입니다."
        }
    };
    res.send(json);
});

module.exports = router;
