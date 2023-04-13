# Write your MySQL query statement below

# Write an SQL query to report the IDs of all the employees with missing information. The information of an employee is missing if:

# The employee's name is missing, or
# The employee's salary is missing.
# Return the result table ordered by employee_id in ascending order.

# SELECT `employee_id` FROM Employees
# WHERE `employee_id` IN (
#     SELECT `employee_id` FROM (
#         SELECT e.`employee_id`, e.`name`, s.`salary` FROM Employees e
#         LEFT JOIN Salaries s ON e.`employee_id` = s.`employee_id`
#         UNION 
#         SELECT s.`employee_id`, e.`name`, s.`salary` FROM Employees e
#         RIGHT JOIN Salaries s ON e.`employee_id` = s.`employee_id`  
#     ) New 
#     WHERE `name` IS NULL OR `salary` IS NULL
# ) 


# SELECT e.`employee_id`, e.`name`, s.`salary` FROM Employees e
# LEFT JOIN Salaries s ON e.`employee_id` = s.`employee_id`
# UNION 
# SELECT s.`employee_id`, e.`name`, s.`salary` FROM Employees e
# RIGHT JOIN Salaries s ON e.`employee_id` = s.`employee_id`

SELECT `employee_id` FROM (
    SELECT e.`employee_id`, e.`name`, s.`salary` FROM Employees e
    LEFT JOIN Salaries s ON e.`employee_id` = s.`employee_id`
    UNION 
    SELECT s.`employee_id`, e.`name`, s.`salary` FROM Employees e
    RIGHT JOIN Salaries s ON e.`employee_id` = s.`employee_id`  
) New 
WHERE `name` IS NULL OR `salary` IS NULL
ORDER BY `employee_id`;


