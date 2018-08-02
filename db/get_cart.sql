select c.cart_id, c.quantity, p.product_id, p.item, p.price, p.img
from Cart c, Product p
where c.product_id = p.product_id;