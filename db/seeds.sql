USE employee_db;
INSERT INTO deparment (name) 
    VALUES
    ('President'),
    ('Pro Shop'),
    ('Human Resources'),
    ('Grounds Crew'); 

INSERT INTO role (title, salary, department_id) 
    VALUES
    ('Senior Manager', 250000, 1), 
    ('Assistant Manager', 200000, 1), 
    ('Head of Board', 180000, 1),
    ('Mens Pro', 160000, 2),
    ('Womens Pro', 140000, 2),
    ('Bag Room', 120000, 2),
    ('Director',100000, 3),
    ('Specialist', 90000, 3),
    ('Superintendent', 80000, 4),
    ('Spray Tech', 75000, 4),
    ('Mechanic', 70000,  4),
    ('Manual Labor', 65000 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
    ('Theo', 'Von', 1, null),
    ('Logan', 'Paul', 2, 1),
    ('Kevin', 'Hart', 3, 1),
    ('Tiger', 'Woods', 4, null),
    ('Lexi', 'Thompson', 5, 4),
    ('Mike', 'Cowan', 6, 4),
    ('Diana', 'Smith', 7, null),
    ('Jack', 'McGoff', 8, 7),
    ('Kevin', 'Lutz', 9, null ),
    ('Kyle', 'Phillips' 10, 9),
    ('Rick', 'Bonham', 11, 9),
    ('Mark', 'Tucker', 12, 9);