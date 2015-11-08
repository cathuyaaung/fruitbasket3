var mongoose = require('mongoose');

var TownSchema = new mongoose.Schema({
  SR_Pcode: String,
  D_Pcode: String,
  TS_Pcode: String,
  Town_Pcode: String,
  Town: String,
  Town_Mya_MMR3: String
});

mongoose.model('Town', TownSchema);