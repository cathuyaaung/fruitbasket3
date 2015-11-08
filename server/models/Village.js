var mongoose = require('mongoose');

var VillageSchema = new mongoose.Schema({
  SR_Pcode: String,
  D_Pcode: String,
  TS_Pcode: String,
  VT_Pcode: String,
  Village_Pcode: String,
  Village: String,
  Village_Mya_MMR3: String
});

mongoose.model('Village', VillageSchema);