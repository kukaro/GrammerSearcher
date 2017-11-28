var express = require('express');
var router = express.Router();
var async = require('async');
var language = require('../logic/language');

var level = require('level');
var path = require('path');
var dbPath = path.join(__dirname, 'mydb');
var db = level(dbPath);

router.get('/', function (req, res, next) {
    var data;

    const task1 = function (callback) {
        db.put('ThisIsKey', 'ThisIsValue', function (err) {
            if (err) {
                console.log(err);
            }
            console.log('task1');
            callback(null);
        });
    };

    const task2 = function (callback) {
        db.get('ThisIsKey', function (err, value) {
            if (err) {
                console.log(err);
            }
            data = value;
            console.log('task2');
            callback(null);
        });
    };

    const task3 = function (callback) {
        res.send(data);
        console.log('task3');
        callback(null);
    };

    const tasks = [task1, task2, task3]
    async.series(tasks);
});

module.exports = router;