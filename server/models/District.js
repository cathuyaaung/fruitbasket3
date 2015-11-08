var mongoose = require('mongoose');

var DistrictSchema = new mongoose.Schema({
  SR_Pcode: String,
  D_Pcode: String,
  District: String,
  District_Mya_MM3: String,
  MYAINFO_D_ID: String
});

mongoose.model('District', DistrictSchema);