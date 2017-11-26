var express = require('express');
var async = require('async');
var level = require('level');

/*use levelDB as MyyDB*/
var path = require('path');
var dbPath = path.join(__dirname, 'mydb');
var db = level(dbPath);

var router = express.Router();

router.get('/', function (req, res, next) {
    var json = {'type': 'text'};
    console.log('keyboard', req.body);

    var task1 = function (callback) {
        db.put(req.body.user_key, req.body.content, function (err) {
            if (err) {
                console.log(err);
            }
            callback(null);
        });
    };

    var task2 = function (callback) {
        db.put(req.body.user_key, function (err, value) {
            if (err) {
                console.log(err);
            }
            console.log(req.body.user_key, value);
            callback(null);
        });
    };

    var task3 = function (callback) {
        res.send(json);
        callback(null);
    };

    var tasks = [task1, task2, task3];

    async.series(tasks,function (err, results) {
        console.log(results);
    });
});

module.exports = router;
