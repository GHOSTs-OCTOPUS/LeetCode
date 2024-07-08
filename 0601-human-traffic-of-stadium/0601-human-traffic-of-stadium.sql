# Write your MySQL query statement below
with new as (select *,
lag(people) over() as p1, lead(people) over() as p2,
lag(people,2) over() as p3, lead(people,2) over() as p4  from stadium)

select id, visit_date,people from new
where people>=100 and p1>=100 and p2>=100 
or people>=100 and p1>=100 and p3>=100
or people>=100 and p2>=100 and p4>=100