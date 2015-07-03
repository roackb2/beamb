var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

router.get('/posts', function (req, res, next) {
	res.json([ {content: "hello"}, {content: "world!~"} ])

	/* use following after put some data into your database */

	// req.post.find()
	// .limit(20)
	// .execAsync().then(function(posts) {
	// 	res.json(posts);
	// }).error(function(err) {
	// 	res.status(500).json(err);
	// })
});

module.exports = router;




