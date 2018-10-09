var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',function(req, res, next){
	res.send('ok post,right away');
});

// some html pages
var options = {
	root: process.cwd() + '/pages/'
}

router.get('/xhr.html',function(req, res, next){
	res.sendFile('./xhr.html', options, function(err){
		if(err) {
			console.log(err);
			res.status(err.status).end();
		}
		/*else 
			console.log("Sent: ")*/
	});
});

router.post('/xhr.html',function(req, res, next){
	console.log(req.body)
	// res.send(JSON.stringify('ok post right away'));
	res.send(null);

});

router.get('/hhh.html', function(req, res, next){
	res.send('Yeah, you, hhh');
});
module.exports = router;
