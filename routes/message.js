var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var userMessage = req.body;

    console.log(userMessage);
    var json = {
        'message': {
            'text': "아직 준비중입니다.\n"+
                '입력하신 메시지 :'+userMessage.content
        }
    };
    res.send(json);
});

module.exports = router;
