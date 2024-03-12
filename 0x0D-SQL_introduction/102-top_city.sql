-- Displays the 3 cities with the highest average tempratures between July and August.
SELECT city, AVG(value) AS avg_tmp
FROM temperatures
WHERE month = 7 OR month = 8
GROUP BY city
ORDER BY avg_temp DESC
LIMIT 3;
