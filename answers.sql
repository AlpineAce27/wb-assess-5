--Problem 1#
--The Wasatch Cupcake Shop is getting ready to send a marketing email announcing a new promotion on Funfetti cupcakes.
--We need to get all of our customers’ email addresses to Marketing.
--Select all of the email addresses from the customers table in alphabetical order.
SELECT email FROM customers ORDER BY email;

--Problem 2#
--Elizabeth Crocker has requested receipts for all of her past cupcake orders.
--To look up the receipts, we need to know which orders Elizabeth placed.
--Write a query that lists the order ids for all orders placed by customers with the first name Elizabeth and last name Crocker.
--Use a SUBQUERY to do this, not a join.
SELECT * FROM orders WHERE customer_id IN (SELECT id FROM customers WHERE fname ='Elizabeth' AND lname = 'Crocker');

--Problem 3#
--Employees need to be scheduled for next week based on how many cupcakes have been ordered and not yet processed.
--Write a query that gets the total number of cupcakes from unprocessed orders.
SELECT SUM(num_cupcakes) FROM orders WHERE processed = false;

--Problem 4#
--Management needs an inventory report. They want to know how many cupcakes have been ordered of each type.
--Write a query that shows the name of each cupcake and the sum of cupcakes ordered for that cupcake type 
--(for both processed and unprocessed orders), sorted in ascending alphabetical order of cupcake name.
--The report should show all cupcake types, even if they have not been ordered at all.
SELECT name, SUM(num_cupcakes) as sum
FROM cupcakes, orders
WHERE orders.cupcake_id = cupcakes.id
GROUP BY cupcakes.name
ORDER BY cupcakes.name;

--Problem 5#
--Marketing now wants to send an email to its top customers, thanking them for their business and offering them a special 
--deal for next month.
--Write a query that shows the email address of each customer and the total number of cupcakes they’ve ordered.
--Results should be sorted by total number of cupcakes, in descending order.
SELECT email, SUM(num_cupcakes) as sum
FROM customers, orders
WHERE orders.customer_id = customers.id
GROUP BY customers.email
ORDER BY customers.email;


--Problem 6#
--Uh oh — it looks like there might have been an issue with a recent batch of funfetti cupcakes
--(someone might have ordered non-edible sparkles to put in the icing instead of edible ones).
--We need to let our customers who have processed orders of funfetti cupcakes know about the issue.
--Write a query that selects the first name, last name and email address of customers who have processed
--orders of funfetti cupcakes. Even if a customer has multiple outstanding orders of funfetti, their email should only appear once.
SELECT fname, lname, email FROM customers
GROUP BY customers.fname, customers.lname, customers.email;

SELECT fname, lname, email FROM customers
FROM customers, orders
WHERE orders.customer_id = customers.id AND orders.cupcake_id = 5 AND orders.processed = TRUE
GROUP BY customers.email
ORDER BY customers.email;

