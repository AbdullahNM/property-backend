const mongoose = require("mongoose");
const validate = require('validator');
const AutoIncrement = require("mongoose-sequence")(mongoose);
const OwnerSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
  properties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
  email: {
    required: true,
    type: String,
    unique: true,
    validate: [validator.isEmail,'Invalid Email Address']
  },
  password: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: Number,
  },
});

OwnerSchema.plugin(AutoIncrement, {
  inc_field: "owner",
  id: "ownerNums",
  start_seq: 1,
});
module.exports = mongoose.model("Owner", OwnerSchema);
