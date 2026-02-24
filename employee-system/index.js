const fs = require("fs");
const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Load employees from file
function loadEmployees() {
  const data = fs.readFileSync("employees.json", "utf-8");
  return JSON.parse(data);
}

// Save employees to file
function saveEmployees(employees) {
  fs.writeFileSync("employees.json", JSON.stringify(employees, null, 2));
}

// Generate unique ID
function generateId() {
  return Date.now().toString(16);
}

// Main Menu
function showMenu() {
  console.log("\nEmployee Management System");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Update Employee");
  console.log("4. Delete Employee");
  console.log("5. Exit");

  rl.question("Select an option: ", handleMenu);
}

// Handle Menu Selection
function handleMenu(option) {
  switch (option) {
    case "1":
      addEmployee();
      break;
    case "2":
      listEmployees();
      break;
    case "3":
      updateEmployee();
      break;
    case "4":
      deleteEmployee();
      break;
    case "5":
      rl.close();
      break;
    default:
      console.log("Invalid option");
      showMenu();
  }
}

// Add Employee
function addEmployee() {
  rl.question("Employee Name: ", (name) => {
    rl.question("Position: ", (position) => {
      rl.question("Salary: ", (salary) => {
        const employees = loadEmployees();

        const newEmployee = {
          id: generateId(),
          name,
          position,
          salary: Number(salary)
        };

        employees.push(newEmployee);
        saveEmployees(employees);

        console.log("Employee added successfully!");
        showMenu();
      });
    });
  });
}

// List Employees
function listEmployees() {
  const employees = loadEmployees();

  console.log("Employee List:");

  employees.forEach(emp => {
    console.log(
      `ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: $${emp.salary}`
    );
  });

  console.log("Total employees:", employees.length);
  showMenu();
}

// Update Employee
function updateEmployee() {
  rl.question("Enter Employee ID to update: ", (id) => {
    const employees = loadEmployees();
    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
      console.log("Employee not found!");
      return showMenu();
    }

    rl.question("New Name: ", (name) => {
      rl.question("New Position: ", (position) => {
        rl.question("New Salary: ", (salary) => {
          employee.name = name;
          employee.position = position;
          employee.salary = Number(salary);

          saveEmployees(employees);
          console.log("Employee updated successfully!");
          showMenu();
        });
      });
    });
  });
}

// Delete Employee
function deleteEmployee() {
  rl.question("Enter Employee ID to delete: ", (id) => {
    let employees = loadEmployees();
    const filtered = employees.filter(emp => emp.id !== id);

    if (employees.length === filtered.length) {
      console.log("Employee not found!");
    } else {
      saveEmployees(filtered);
      console.log("Employee deleted successfully!");
    }

    showMenu();
  });
}

// Start program
showMenu();