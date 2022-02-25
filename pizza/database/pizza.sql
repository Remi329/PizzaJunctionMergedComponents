CREATE TABLE IF NOT EXISTS customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    city VARCHAR(20) NOT NULL,
    street VARCHAR(20) NOT NULL,
    house_No VARCHAR(3) NOT NULL,
    email VARCHAR(50) NOT NULL,
    contact_No VARCHAR(10) NOT NULL,
	promo VARCHAR(50)
);

INSERT INTO customers (first_name, last_name, city, street, house_No, email, contact_No)
VALUES ('Dummy', 'Tester', 'Site', 'Facility', '1', 'dummy@testing.com', 09043573);

CREATE TABLE toppings (
	id SERIAL NOT NULL,
	name VARCHAR(20),
	price DOUBLE PRECISION NOT NULL
);

INSERT INTO toppings (name, price)
VALUES ('Pepperoni', 1),('Chicken', 3),('Olives', 1),('Mushrooms', 1),('Sweetcorn', 1)

CREATE TABLE discount_table (
id SERIAL NOT NULL,
product_id INT NOT NULL,
percent FLOAT,
FOREIGN KEY (product_id) REFERENCES product_table(id)
);

CREATE TABLE product_table (
id SERIAL NOT NULL,
ingregient_id INT REFERENCES ingredients(ingregient_id),
name VARCHAR(25),
total_price FLOAT,
image_url VARCHAR(255), -- adjusted lenght for long addresses
PRIMARY KEY (id),
);

CREATE TABLE order_table (
id SERIAL NOT NULL,
customer_id INT  REFERENCES customers(customer_id),
product_id INT NOT NULL,
quantity INT,
order_date DATE,
PRIMARY KEY (id),
--FOREIGN KEY (cust_id) REFERENCES cust_table(id),
FOREIGN KEY (product_id) REFERENCES product_table(id)
);

CREATE TABLE admin_table (
id SERIAL NOT NULL,
name VARCHAR(32),
PRIMARY KEY (id)
);
