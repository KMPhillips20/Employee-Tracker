-- President --
    -- Senior Manager -- 
        -- Theo Von --
    -- Assistant Manager --
        -- Logan Paul --
    -- Head of Board --
        -- Kevin Hart --
-- Pro Shop--
    -- Mens Pro --
        -- Tiger Woods --
    -- Womens Pro --
        -- Lexi Thompson --
    -- Bag Room -- 
        -- Mike Cowan --
-- Human Resources --
    -- Director --
        -- Diana Smith --
    -- Specialist --
        -- Jack McGoff
-- Grounds Crew --
    -- Superintendent -- 
        -- Kevin Lutz --
    -- Mechanic --
        -- Rick Bonham --
    -- Manual Labor -- 
        -- Mark Tucker


INSERT INTO deparment (name) 
    VALUES
    ('President'), -- 1 --
    ('Pro Shop'), -- 2 --
    ('Human Resources'), -- 3 --
    ('Grounds Crew'); -- 4 --

INSERT INTO role (title, salary, department_id) 
    VALUES
    ('Senior Manager '), -- 1 --
    ('Assistant Manager'), -- 1 --
    ('Head of Board '), -- 1 --
    ('Mens Pro'),  -- 2 -- 
    ('Womens Pro'), -- 2 --
    ('Bag Room'), -- 2 --
    ('Director '), -- 3 --
    ('Specialist'), -- 3 --
    ('Superintendent'), -- 4 --
    ('Mechanic'), -- 4 --
    ('Manual Labor'),-- 4 --

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
    ('Theo', 'Von'), -- 1 --
    ('Logan', 'Paul'), -- 1 --
    ('Kevin', 'Hart'), -- 1 --
    ('Tiger', 'Woods'), -- 2 --
    ('Lexi', 'Thompson'), --2 --
    ('Mike', 'Cowan'), -- 2 --
    ('Diana', 'Smith'), -- 3 --
    ('Jack', 'McGoff'), -- 3 --
    ('Kevin', 'Lutz'), -- 4 --
    ('Rick', 'Bonham'), -- 4 --
    ('Mark', 'Tucker'), -- 4 --