var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/counts/:date', function (req, res) {
    date = req.params.date
	 db.all("SELECT case when points.good = 1 then 'Good' else 'Bad' end as label, count(points.good) as value, style.color, style.highlight FROM 'points' join style on points.good=style.good where points.date > '" + date + "' group by points.good;", function(err, row) {
    if(err !== null) {
      res.status(500).send( "An error has occurred -- " + err);
    }
    else {
      res.json(row);
	}
  });
});

router.put('/counts/:behavior(0|1)', function(req, res) {
  behavior = req.params.behavior;
  sqlRequest = "INSERT into points (good, name) VALUES (" + behavior + ",'Collette');"
  db.run(sqlRequest, function(err) {
    if(err !== null) {
      res.status(500).send( "An error has occurred -- " + err);
    }
    else {
      res.json({behavior: behavior, status: "added"});
    } 
  });
});

module.exports = router;
