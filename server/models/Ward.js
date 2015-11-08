var mongoose = require('mongoose');

var WardSchema = new mongoose.Schema({
  SR_Pcode: String,
  D_Pcode: String,
  TS_Pcode: String,
  Town_Pcode: String,
  Ward_Pcode: String,
  Ward: String,
  Ward_Mya_MM3: String
});

mongoose.model('Ward', WardSchema);