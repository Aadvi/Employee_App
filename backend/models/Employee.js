const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  department: { type: String, enum: ["IT", "Marketing", "Sales", "HR"] },
  salary: Number,
});

module.exports = mongoose.model("Employee", EmployeeSchema);
