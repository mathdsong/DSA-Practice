# Write your MySQL query statement below
# Write an SQL query to report the distance traveled by each user.
# Return the result table ordered by travelled_distance in descending order, if two or more users traveled the same distance, order them by their name in ascending order.

SELECT u.`name`, SUM(COALESCE(r.`distance`, 0)) AS `travelled_distance` FROM Users u
LEFT JOIN Rides r ON u.`id` = r.`user_id`
GROUP BY u.`id`
ORDER BY `travelled_distance` DESC, u.`name` ASC;