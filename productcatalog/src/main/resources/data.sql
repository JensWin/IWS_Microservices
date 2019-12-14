INSERT INTO rating (stars, text) VALUES (5, 'Very good product.');
INSERT INTO rating (stars, text) VALUES (4, 'Nice product.');
INSERT INTO rating (stars, text) VALUES (4, 'Good product but high price.');
INSERT INTO rating (stars, text) VALUES (2, 'I don`t like it');

INSERT INTO product_attribute (description, name, value) VALUES ('', 'author', 'Johannes Kraut');
INSERT INTO product_attribute (description, name, value) VALUES ('', 'publisher', 'JK Publisher');
INSERT INTO product_attribute (description, name, value) VALUES ('', 'author', 'Tim Buktu');
INSERT INTO product_attribute (description, name, value) VALUES ('', 'publisher', 'BukPub');
INSERT INTO product_attribute (description, name, value) VALUES ('', 'author', 'Olga Machslochoff');
INSERT INTO product_attribute (description, name, value) VALUES ('', 'publisher', 'Sample Publisher');

INSERT INTO product (description, name, price, quantity) VALUES ('Great book about Microservices.', 'Microservices', 49.9, 13);
INSERT INTO product (description, name, price, quantity) VALUES ('Cloud computing book.', 'Cloud for dummies', 29.7, 3);
INSERT INTO product (description, name, price, quantity) VALUES ('Learn how to build microservices with Java.', 'Microservices with Java', 68.9, 23);

INSERT INTO product_ratings (product_id, ratings_id) VALUES (1,1);
INSERT INTO product_ratings (product_id, ratings_id) VALUES (1,2);
INSERT INTO product_ratings (product_id, ratings_id) VALUES (2,3);
INSERT INTO product_ratings (product_id, ratings_id) VALUES (2,4);

INSERT INTO product_attributes (product_id, attributes_id) VALUES (1,1);
INSERT INTO product_attributes (product_id, attributes_id) VALUES (1,2);
INSERT INTO product_attributes (product_id, attributes_id) VALUES (2,3);
INSERT INTO product_attributes (product_id, attributes_id) VALUES (2,4);
INSERT INTO product_attributes (product_id, attributes_id) VALUES (3,5);
INSERT INTO product_attributes (product_id, attributes_id) VALUES (3,6);