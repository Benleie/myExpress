const router = require('express').Router();
const path = require('path');
const fs = require('fs');

// var url = path.join(__dirname, "data/inventory.json")
var p1 = new Promise((resolve, reject) => {
    fs.readFile("public/data/inventory.json", 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data)
    resolve(JSON.parse(data))
  })
})


router.get('/inventory.json', function(req, res) {
  p1.then(data =>  res.send(data) )
    .catch(next);

});

module.exports = router;
