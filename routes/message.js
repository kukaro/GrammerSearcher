var express = require('express');
var router = express.Router();
var async = require('async');
var level = require('level');

/*use levelDB as MyyDB*/
var path = require('path');
var dbPath = path.join(__dirname, 'mydb');
var db = level(dbPath);

router.post('/', function (req, res, next) {
    var userMessage = req.body;
    console.log(userMessage);

    var task1 = function (callback) {
        console.log('task1');
        db.put(userMessage.user_key, userMessage.content, function (err) {
            if (err) {
                console.log(err);
            }
            callback(null);
        });
        callback(null);
    };

    var task2 = function (callback) {
        db.put(userMessage.user_key, function (err, value) {
            console.log('task2');
            if (err) {
                console.log(err);
            }
            console.log(userMessage.user_key, value);
            callback(null);
        });
        callback(null);
    };

    var task3 = function (callback) {
        console.log('task3');
        var json = {
            'message': {
                'text': "아직 준비중입니다.\n" +
                '입력하신 메시지 :' + userMessage.content
            }
        };
        res.send(json);
        callback(null);
    };

    var tasks = [task1, task2, task3];

    async.series(tasks, function (err, results) {
        console.log(results);
    });

});

module.exports = router;
