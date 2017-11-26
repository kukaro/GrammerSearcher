var express = require('express');
var router = express.Router();
var async = require('async');

var level = require('level');
var path = require('path');
var dbPath = path.join(__dirname, 'mydb');
var db = level(dbPath);

router.get('/', function (req, res, next) {
    var data;

    var task1 = function (callback) {
        /*db.put('name', 'LevelUP', function (err) {
            if(err) {
                console.log(err);
                callback(null);
            }
            else {
                console.log('put success');
                callback(null);
            }
        });*/
        callback(null);
    };

    var task2 = function (callback) {
        db.get('name', function (err, value) {
            if (err) return console.log(err);
            console.log('name=' + value);
            data = value;
            callback(null);
        });
    };

    var task3 = function (callback) {
        console.log('data', data);
        res.send(data);
        callback(null);
    };

    var tasks = [task1, task2, task3];
    async.series(tasks, function (err, results) {
        if (err) return console.log(err);
        console.log('results', results);
    });
});

module.exports = router;