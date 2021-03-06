var mongoose = require('mongoose');

module.exports.connect = function() {
	mongoose.connect('database link',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	var db = mongoose.connection;
	//db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(callback){
	  console.log("Connection Succeeded");
	});
	return db;
}