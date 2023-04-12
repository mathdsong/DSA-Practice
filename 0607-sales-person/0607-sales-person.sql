# # Write an SQL query to report the names of all the salespersons who did not have any orders related to the company with the name "RED".
# # Write your MySQL query statement below

# Method 1: 
SELECT `name` FROM SalesPerson 
WHERE `sales_id` NOT IN (
    SELECT `sales_id` FROM Orders
    WHERE `com_id` IN (
        SELECT `com_id` FROM Company WHERE `name` = 'RED'
    )
)

# # Method 2:
# SELECT `name` FROM SalesPerson
# WHERE `sales_id` NOT IN (
#     SELECT `sales_id` FROM (
#         SELECT c.`com_id`, c.`name`, o.`sales_id` FROM Company c
#         RIGHT JOIN Orders o ON c.`com_id` = o.`com_id`
#         WHERE c.`name` = 'RED'
#     ) New
# )