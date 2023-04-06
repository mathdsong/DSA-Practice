# # Write your MySQL query statement below
# SELECT u.`user_id` AS `buyer_id`, `join_date`, 
# SUM(CASE WHEN year(o.`order_date`) = '2019%' AND o.`item_id` IS NOT NULL THEN 1 ELSE 0 END) AS `orders_in_2019` 
# FROM USERS u
# LEFT JOIN Orders o ON u.`user_id` = o.`buyer_id`
# GROUP BY `buyer_id`;


# Write your MySQL query statement below
SELECT u.`user_id` AS `buyer_id`, u.`join_date`, 
COUNT(CASE WHEN o.`order_date` LIKE '2019%' THEN o.`item_id` ELSE NULL END) AS `orders_in_2019` 
FROM USERS u
LEFT JOIN Orders o ON u.`user_id` = o.`buyer_id`
GROUP BY u.`user_id`;