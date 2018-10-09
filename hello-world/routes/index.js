module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('Hello world666');
  });
  app.get('/customer', function(req, res){
    res.send('customer page666');
  });
  app.get('/admin', function(req, res){
    res.send('admin page666');
  });
};