const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
    user: "root",
    database: "employee_db",
});



const selectOne = (type) => {
    switch (type) {
        case 'VIEW THE EMPLOYEES': {
            db.query('SELECT * FROM employee', (err, employees) => {
                console.table(employees);
            });
        }
        case 'VIEW THE DEPARTMENTS': {
            db.query('SELECT * FROM department', (err, departments) => {
                console.table(departments);
            });
        }
        case 'VIEW ALL ROLES': {
            db.query('SELECT * FROM role', (err, roles) => {
                console.table(roles);
            });
        }
    }
}


prompt({
    type: 'rawlist',
    message: 'Please select one of the following choices!',
    choices: [
        'VIEW THE EMPLOYEES',
        'VIEW THE DEPARTMENTS',
        'VIEW THE ROLES',
    ],
    name: 'type',
})
.then((answers) =>{
    selectOne(answers.type);
});
