const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
    user: "root",
    database: "employee_db",
},
    console.log("You are now connected to employee_db")
);


const chooseAll = async (table) => {
    return await db.promise().query("SELECT * FROM " + table);
};

const insert = (table, info) => {
    db.query("INSERT INTO ?? SET ?", [table, info], (err) => {
        if (err) return console.error(err);
        console.log('\nSuccessfully created!\n');
        init();
    });
};

// ------ NEW EMPLOYEE --------
const newEmployee = async () => {
    const [roleInfo] = await chooseAll("role");
    const [employeeInfo] = await chooseAll("employee");
    const roles = roleInfo.map(role => {
        return {
            name: role.title,
            value: role.id
        }
    });
    const managers = employeeInfo.map(employee => {
        return {
            name: employee.first_name + " " + employee.last_name,
            value: employee.id
        }
    });
    const answers = await prompt([
        {
            name: "first_name",
            message: "New hire first name?"
        },
        {
            name: "last_name",
            message: "New hire last name?"
        },
        {
            type: "rawlist",
            name: "role_id",
            message: "New hire role?",
            choices: roles,
        },
        {
            type: "rawlist",
            name: "manager_id",
            message: "Who is your manager?",
            choices: managers,
        }
    ])
    insert("employee", answers);
};


// -------- NEW ROLE ---------

const newRole = async () => {
    const [departmentInfo] = await chooseAll("department");
    const [roleInfo] = await chooseAll("role");
    const departments = departmentInfo.map(department => {
        return {
            name: department.name,
            value: department.id
        }
    });
    const answers = await prompt([
        {
            name: "title",
            message: "What is the position title?"
        },
        {
            name: "salary",
            message: "What is the salary for the new position?"
        },
        {
            type: "rawlist",
            name: "department_id",
            message: "What department does this poistion belong in?",
            choices: departments,
        },
    ])
    insert("role", answers);
};


// -------- NEW DEPARTMENT ----------

const newDepartment = async () => {
    const answers = await prompt([{
        name: "name",
        message: "New department name?"
    }
    ])
    insert("department", answers);
}

// ----- Options -----

const pickOption = async (type) => {
    switch (type) {
        case "View all Employees": {
            const [info] = await chooseAll("employee");
            console.table(info);
            init();
            break;
        }
        case "View all Departments": {
            const [info] = await chooseAll("department");
            console.table(info);
            init();
            break;
        }
        case "View all Roles": {
            const [info] = await chooseAll("role");
            console.table(info);
            init();
            break;
        }
        case "Add new Employee": {
            await newEmployee();
            break;
        }
        case "Add new Department": {
            await newDepartment();
            break;
        }
        case "Add new Role": {
            await newRole();
            break;
        }
    }
}

const init = async () => {
    const answers = await prompt({
        type: "rawlist",
        message: "Please pick one.",
        choices: [
            "View all Departments",
            "View all Employees",
            "View all Roles",
            "Add new Department",
            "Add new Employee",
            "Add new Role",
        ],
        name: "type",
    })
    pickOption(answers.type)
}

init();

