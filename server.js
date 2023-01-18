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
        case 'VIEW EMPLOYEES': {
            db.query('SELECT * FROM employee', (err, employees) => {
                console.table(employees);
                init();
            });
            break;
        }
        case 'VIEW DEPARTMENTS': {
            db.query('SELECT * FROM department', (err, departments) => {
                console.table(departments);
                init();
            });
            break;
        }
        case 'VIEW ROLES': {
            db.query('SELECT * FROM role', (err, roles) => {
                console.table(roles);
                init();
            });
            break;
        }
    }
}

const init = () => {
    prompt({
        type: 'rawlist',
        message: 'Please select one of the following choices!',
        choices: [
            'VIEW EMPLOYEES',
            'VIEW DEPARTMENTS',
            'VIEW ROLES',
        ],
        name: 'type',
    })
        .then((answers) => {
            selectOne(answers.type);
        });
};

init();