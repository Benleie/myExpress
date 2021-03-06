const router = require('express').Router();
const path = require('path');
const fs = require('fs');

var url = path.join(__dirname, "data/inventory.json")
var p1 = new Promise((resolve, reject) => {
  fs.readFile(url, 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data)
    resolve(JSON.parse(data))
  })
})



/* POST users listing. */
router.post('/api/inventory.json', function(req, res, next) {
  p1.then(data =>  res.send(data) )

});

module.exports = router;
