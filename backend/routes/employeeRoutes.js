import express from "express";
import {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";

import auth from "../middlewares/authMiddleware.js";

const employeeRoutes = express.Router();

employeeRoutes.post("/employees", auth, addEmployee);
employeeRoutes.get("/employees", auth, getEmployee);
employeeRoutes.put("/employees/:id", auth, updateEmployee);
employeeRoutes.delete("/employees/:id", auth, deleteEmployee);

export default employeeRoutes;
