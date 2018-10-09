var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
   res.sendfile('./static/views/index.html');
});
app.get('/about', function(req, res) {
   res.sendfile('./static/views/about.html');
});
 
app.get('/article', function(req, res) {
   res.sendfile('./static/views/article.html');
});
app.get('/works', function(req, res) {
   res.sendfile('./static/views/works.html');
});
app.get('/elementfirst', function(req, res) {
   res.sendfile('./static/views/elementfirst.html');
});
/*app.get('/', function(req, res) {
   res.sendfile('./views/index.html');
});
*/
console.log(new Date())
app.listen(1337);

/*var express = require('express');
var app = express();
app.set('port', process.env.PORT || 1337);
// app.set('views', path.join(__dirname, 'views'));
// console.log(process.cwd() == __dirname)
// console.log(__dirname)
app.set('views', process.cwd() + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
   res.send('Hello, mimi');
});
// app.get('/api', function(request, response) {
//    response.send({name:"张三",age:40});
// });
var api = require('./routes/api');
app.get('/api', api.index);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.parser());
app.use(express.method-override());
app.use(app.router);

app.listen(app.get('port'));
*/



