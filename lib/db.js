var Promise = require('bluebird');
var mongoose =  Promise.promisifyAll(require("mongoose"));
var Schema = mongoose.Schema;
/* modify schemas after developing */
var schema = new Schema(null, {strict: false});

/** set your Mongo connection here */
var conn = mongoose.createConnection( 'mongodb://localhost/test' );

exports = module.exports = function setupDB(collections) {
	return function (req, res, next) {
		for(var i = 0; i < collections.length; i++) {
			var collection = collections[i];
			req[collection] = conn.model(collection, schema);
		}
		/* you can use req.model(name) to model additional collections */
		req.model = function(name) {
			return conn.model(name, schema);
		}
		next();
	}
}



