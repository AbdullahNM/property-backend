const mongoose = require("mongoose");
const validate = require("validator");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const PropertySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  owner: { 
    required: true, 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Owner" },
    date: {
        required: true,
        type: Date,
    },
    location: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    bedrooms: {
        required: true,
        type: Number,
    },
    bath: {
        required: true,
        type: Number,
    },
    
});


noteSchema.plugin(AutoIncrement, {
    inc_field: "property",
    id: "ticketNums",
    start_seq: 1,
  });
  
module.exports = mongoose.model("Property", PropertySchema);
