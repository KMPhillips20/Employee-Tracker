const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
    user: "root",
    database: "employee_db",
},
console.log("You are now coonected to employee_db")
);


const answers = await prompt ([
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
        choices: mangers,
    }
])





const anwsers = await prompt([
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
    }
])






