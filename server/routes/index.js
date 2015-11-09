var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var District = mongoose.model('District');
var State = mongoose.model('State');
var Town = mongoose.model('Town');
var Township = mongoose.model('Township');
var Village = mongoose.model('Village');
var VillageTract = mongoose.model('VillageTract');
var Ward = mongoose.model('Ward');



router.get('/apikey', function(req,res, next){
  var request = require('request');
  console.log('generating key');
  request.post(
      'http://api.maepaysoh.org/token/generate',
      { form: { api_key: '35a0c713ea2fd79913d2d30f6bc627073cd1edd9' } },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              res.json(body);
          } else {
              return next(err);
          }
      }
  );

});


router.get('/states', function(req, res, next) {
  State.find({}, 'SR_Pcode State_Region_Mya_MM3',function(err, states){
    if(err){ return next(err); }

    res.json(states);
  });
});

router.get('/districts', function(req, res, next) {
  //var sr_pcode = 'MMR001';
  var sr_pcode = req.param('sr_pcode');
  District.find({SR_Pcode: sr_pcode}, 'D_Pcode District_Mya_MM3',function(err, districts){
    if(err){ return next(err); }

    res.json(districts);
  });
});

router.get('/townships', function(req, res, next) {
  var d_pcode = req.param('d_pcode');
  Township.find({D_Pcode: d_pcode}, 'TS_Pcode Township_Mya_MM3',function(err, townships){
    if(err){ return next(err); }

    res.json(townships);
  });
});

router.get('/towns', function(req, res, next) {
  var ts_pcode = req.param('ts_pcode');
  Town.find({TS_Pcode: ts_pcode}, 'Town_Pcode Town_Mya_MMR3',function(err, towns){
    if(err){ return next(err); }

    res.json(towns);
  });
});

router.get('/wards', function(req, res, next) {
  var town_pcode = req.param('town_pcode');
  Ward.find({Town_Pcode: town_pcode}, 'Ward_Pcode Ward_Mya_MM3',function(err, wards){
    if(err){ return next(err); }

    res.json(wards);
  });
});

router.get('/villageTracts', function(req, res, next) {
  VillageTract.find(function(err, villageTracts){
    if(err){ return next(err); }

    res.json(villageTracts);
  });
});

router.get('/villages', function(req, res, next) {
  var vt_pcode = req.param('vt_pcode');
  Village.find({VT_Pcode: vt_pcode}, 'Village_Pcode Village_Mya_MMR3',function(err, villages){
    if(err){ return next(err); }

    res.json(villages);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
