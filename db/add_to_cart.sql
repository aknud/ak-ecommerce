insert into Cart (cart_id, quantity, product_id)
values ($1, $2, $3);

select * from Cart;