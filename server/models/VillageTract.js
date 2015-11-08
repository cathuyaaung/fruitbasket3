var mongoose = require('mongoose');

var VillageTractSchema = new mongoose.Schema({
  SR_Pcode: String,
  D_Pcode: String,
  TS_Pcode: String,
  VT_Pcode: String,
  Village_Tract: String,
  Village_Tract_Mya_MMR3: String
});

mongoose.model('VillageTract', VillageTractSchema);