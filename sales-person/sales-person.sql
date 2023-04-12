# Write an SQL query to report the names of all the salespersons who did not have any orders related to the company with the name "RED".
# Write your MySQL query statement below
SELECT `name` FROM SalesPerson 
WHERE `sales_id` NOT IN (
    SELECT `sales_id` FROM Orders
    WHERE `com_id` IN (
        SELECT `com_id` FROM Company WHERE `name` = 'RED'
    )
)