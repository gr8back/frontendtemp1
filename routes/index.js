var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('indexprod')
})

router.get('/prod', function(req, res, next) {
    res.render('indexprod');

});


module.exports = router;
