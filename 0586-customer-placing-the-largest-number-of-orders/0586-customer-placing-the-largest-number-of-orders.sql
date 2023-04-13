# Write your MySQL query statement below
# Write an SQL query to find the customer_number for the customer who has placed the largest number of orders.
# The test cases are generated so that exactly one customer will have placed more orders than any other customer.

# # it works but not brief:
# SELECT DISTINCT `customer_number` FROM Orders
# WHERE `customer_number` = (
#     SELECT `customer_number` FROM (
#         SELECT `customer_number`, COUNT(`order_number`) FROM Orders
#         GROUP BY `customer_number` 
#         HAVING COUNT(`order_number`) = (
#                 SELECT COUNT(`order_number`) FROM Orders 
#                 GROUP BY `customer_number` 
#                 ORDER BY COUNT(`order_number`) DESC 
#                 LIMIT 1
#         )
#     ) New
# );

SELECT `customer_number`
FROM Orders
GROUP BY `customer_number`
ORDER BY COUNT(`order_number`) DESC
LIMIT 1;

