var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var picModel = mongoose.model('dataModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My App' });
});

router.post('/getImage', function(req, res){
	var getImages = new picModel();
    getImages.url = req.body.url;
    getImages.description = req.body.description;
    getImages.save(function(err){
    	res.status(401);
    	console.log(err);
    });
});

router.get('/returnImage', function(req, res){
	picModel.find(function(err, data){
		if(err){ return next(err); }

		res.json(data);
	})
});

module.exports = router;
