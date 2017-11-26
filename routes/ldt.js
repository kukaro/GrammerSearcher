var express = require('express');
var router = express.Router();
var async = require('async');

var level = require('level');
var path = require('path');
var dbPath = path.join(__dirname, 'mydb');
var db = level(dbPath);

router.get('/', function (req, res, next) {
    var data;

        db.put('ThisIsKey', 'ThisIsValue', function (err) {
            if(err) {
                console.log(err);
            }
            db.get('ThisIsKey', function (err, value) {
                if (err) {
                    console.log(err);
                }
                console.log(value);
                res.send(value);
            });
        });
});

module.exports = router;