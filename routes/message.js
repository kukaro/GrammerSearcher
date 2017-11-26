var express = require('express');
var router = express.Router();
var async = require('async');
var level = require('level');

/*use levelDB as MyyDB*/
var path = require('path');
var dbPath = path.join(__dirname, 'mydb');
var db = level(dbPath);

router.post('/', function (req, res, next) {
    var userMessage = userMessage;
    console.log(userMessage);

    const task1 = function (callback) {
        db.put(userMessage.user_key, userMessage.content, function (err) {
            if (err) {
                console.log(err);
            }
            callback(null);
        });
    };

    const task2 = function (callback) {
        db.put(userMessage.user_key, function (err, value) {
            if (err) {
                console.log(err);
            }
            console.log(userMessage.user_key, value);
            callback(null);
        });
    };

    const task3 = function (callback) {
        var json = {
            'message': {
                'text': "아직 준비중입니다.\n" +
                '입력하신 메시지 :' + userMessage.content
            }
        };
        res.send(json);
        callback(null);
    };

    const tasks = [task1, task2, task3];

    async.series(tasks, function (err, results) {
        console.log(results);
    });

});

module.exports = router;
