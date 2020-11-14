const { Schema, model } = require("mongoose");

const volunteerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Events",
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = model("volunteers", volunteerSchema);
