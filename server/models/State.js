var mongoose = require('mongoose');

var StateSchema = new mongoose.Schema({
  SR_Pcode: String,
  State_Region: String,
  State_Region_Mya_MM3: String,
  MYAINFO_SD_ID: String
});

mongoose.model('State', StateSchema);