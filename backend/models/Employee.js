import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  department: { type: String, enum: ["IT", "Marketing", "Sales", "HR"] },
  salary: Number,
});

export default mongoose.model("Employee", EmployeeSchema);
