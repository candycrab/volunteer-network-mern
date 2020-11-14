const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   banner: {
      type: String,
      required: true,
   },
   date: {
      type: String,
      required: true,
   },
});

eventSchema.index({ title: "text", description: "text" });
module.exports = model("Events", eventSchema);
