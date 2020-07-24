var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  let dataArray = [
    { name: "John", age: 12},
    { name: "Frasier", age: 55 },
    { name: "Niles", age: 50 },
  ];

  res.json({
    data: dataArray
  });

});

module.exports = router;
