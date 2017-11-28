var client = require('cheerio-httpcli');
var async = require('async');

this.crawlingMyBlog = function (req, res, next) {
    console.log(req.body);
    var url = "http://kamang-it.tistory.com/";
    var param = {};
    var result = client.fetchSync(url, param, function (err, $, res) {
        if(err){
            console.log('Error:',err);
            return;
        }
    });

    return result.body;
};