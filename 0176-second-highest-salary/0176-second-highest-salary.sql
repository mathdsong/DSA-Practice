# Write your MySQL query statement below

SELECT IFNULL((SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1,1), null) AS SecondHighestSalary;

# SELECT salary AS SecondHighestSalary FROM Employee ORDER BY salary DESC LIMIT 1,1;  
# this was my original solution but can't handle 0 results situation. 

# Key points:
# IFNULL
# DISTINCT

# Reference Links:
# https://www.mysqltutorial.org/mysql-limit.aspx
# https://www.w3schools.com/mysql/mysql_ifnull.asp
