create table Product (
	product_id serial primary key,
	item VARCHAR(50),
	price VARCHAR(50),
	img VARCHAR(50)
);

create table Cart (
    cart_id integer primary key,
    quantity integer,
    product_id integer references Product (product_id)
);

-- Dummy Data for Product table
insert into Product (product_id, item, price, img) values (1, 'Egg Patty Fried', '$98.02', 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff');
insert into Product (product_id, item, price, img) values (2, 'Tomatoes - Roma', '$18.48', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into Product (product_id, item, price, img) values (3, 'Broom And Broom Rack White', '$55.75', 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff');
insert into Product (product_id, item, price, img) values (4, 'Apple - Granny Smith', '$70.05', 'http://dummyimage.com/250x250.jpg/cc0000/ffffff');
insert into Product (product_id, item, price, img) values (5, 'Wine - Maipo Valle Cabernet', '$32.22', 'http://dummyimage.com/250x250.jpg/dddddd/000000');
insert into Product (product_id, item, price, img) values (6, 'Veal Inside - Provimi', '$79.96', 'http://dummyimage.com/250x250.jpg/dddddd/000000');
insert into Product (product_id, item, price, img) values (7, 'Mushroom - Chantrelle, Fresh', '$65.39', 'http://dummyimage.com/250x250.jpg/cc0000/ffffff');
insert into Product (product_id, item, price, img) values (8, 'Soup - French Onion', '$68.72', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into Product (product_id, item, price, img) values (9, 'Snapple Lemon Tea', '$11.71', 'http://dummyimage.com/250x250.jpg/dddddd/000000');
insert into Product (product_id, item, price, img) values (10, 'Durian Fruit', '$82.53', 'http://dummyimage.com/250x250.jpg/cc0000/ffffff');
insert into Product (product_id, item, price, img) values (11, 'Squash - Sunburst', '$7.97', 'http://dummyimage.com/250x250.jpg/cc0000/ffffff');
insert into Product (product_id, item, price, img) values (12, 'Steel Wool', '$78.60', 'http://dummyimage.com/250x250.jpg/cc0000/ffffff');
insert into Product (product_id, item, price, img) values (13, 'Water - Mineral, Carbonated', '$29.19', 'http://dummyimage.com/250x250.jpg/cc0000/ffffff');
insert into Product (product_id, item, price, img) values (14, 'Flower - Potmums', '$78.49', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into Product (product_id, item, price, img) values (15, 'Compound - Passion Fruit', '$21.61', 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff');
insert into Product (product_id, item, price, img) values (16, 'Water - Evian 355 Ml', '$93.35', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into Product (product_id, item, price, img) values (17, 'Ostrich - Fan Fillet', '$31.51', 'http://dummyimage.com/250x250.jpg/cc0000/ffffff');
insert into Product (product_id, item, price, img) values (18, 'Flour - Rye', '$86.49', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into Product (product_id, item, price, img) values (19, 'Bread - Sticks, Thin, Plain', '$17.07', 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff');
insert into Product (product_id, item, price, img) values (20, 'Tuna - Loin', '$35.61', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into Product (product_id, item, price, img) values (21, 'Vinegar - White Wine', '$36.88', 'http://dummyimage.com/250x250.jpg/dddddd/000000');
insert into Product (product_id, item, price, img) values (22, 'Pasta - Ravioli', '$45.36', 'http://dummyimage.com/250x250.jpg/cc0000/ffffff');
insert into Product (product_id, item, price, img) values (23, 'Cardamon Seed / Pod', '$37.49', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into Product (product_id, item, price, img) values (24, 'Wine - Rubyport', '$99.15', 'http://dummyimage.com/250x250.jpg/cc0000/ffffff');
insert into Product (product_id, item, price, img) values (25, 'Squash - Butternut', '$53.69', 'http://dummyimage.com/250x250.jpg/dddddd/000000');
insert into Product (product_id, item, price, img) values (26, 'Lotus Root', '$57.93', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into Product (product_id, item, price, img) values (27, 'Jam - Raspberry', '$8.50', 'http://dummyimage.com/250x250.jpg/dddddd/000000');
insert into Product (product_id, item, price, img) values (28, 'Beef - Rib Roast, Cap On', '$82.02', 'http://dummyimage.com/250x250.jpg/cc0000/ffffff');
insert into Product (product_id, item, price, img) values (29, 'Fish - Scallops, Cold Smoked', '$66.33', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into Product (product_id, item, price, img) values (30, 'Bread - Roll, Calabrese', '$0.59', 'http://dummyimage.com/250x250.jpg/cc0000/ffffff');