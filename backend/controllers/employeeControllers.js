const Employee = require("../models/Employee");

//Add Employee
exports.addEmploye = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//edit employee
exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEmployee)
      return res.status(404).json({ message: "Employee Not Found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete employee

exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee)
      return res.status(404).json({ message: "Employee not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all employe, filter and sorting pagination as well
exports.getEmployee = async (req, res) => {
  try {
    const { page = 1, limit = 5, department, sort, search } = req.query;

    // query
    let query = {};
    if (department) query.department = department;
    if (search) query.firstName = new RegExp(search, "i");

    // sorting

    const sortOption = sort ? { salary: sort === "asc" ? 1 : -1 } : {};

    // pagination
    const skip = (page - 1) * limit;

    // execute query
    const employee = await Employee.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(Number(limit));

    const total = await Employee.countDocuments(query);

    res.json({
      data: employees,
      totalPage: Math.ceil(total / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};