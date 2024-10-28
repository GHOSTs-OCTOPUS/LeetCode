select customer_id from
(select customer_id,count(distinct product_key) as cnt1 from Customer  group by customer_id)a
where a.cnt1= (select count(product_key) from Product)