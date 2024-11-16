const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true},
    phone: { type: String, required: true },
    company: { type: String, required: true },
    jobTitle: { type: String, required: true },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);
