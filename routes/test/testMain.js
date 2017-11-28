var express = require('express');
var router = express.Router();

//import myBlog url
var myBLog = require('./test_module/myBlog');

router.get('/', function (req, res, next) {
    res.send('testMain');
});

router.get('/my-blog', function (req, res, next) {
    var body = myBLog.crawlingMyBlog(req,res,next);
    console.log('My blog crawling');
    console.log(body);
    res.send(body);
});

module.exports = router;
