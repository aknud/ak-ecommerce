insert into Cart (user_id, quantity, product_id)
values (1, 1, $1);

select c.user_id, c.cart_id, c.quantity, p.product_id, p.item, p.price, p.img
from Cart c, Product p
where c.product_id = p.product_id;