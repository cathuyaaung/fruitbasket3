var mongoose = require('mongoose');

var TownshipSchema = new mongoose.Schema({
  SR_Pcode: String,
  D_Pcode: String,
  TS_Pcode: String,
  Township: String,
  Township_Mya_MM3: String,
  MYAINFO_TS_ID: String
});

mongoose.model('Township', TownshipSchema);