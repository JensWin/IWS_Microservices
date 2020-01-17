CREATE SCHEMA IF NOT EXISTS iws;
SET search_path TO iws;

CREATE TABLE iws.order(
   order_id serial PRIMARY KEY,
   "user" varchar(100) NOT NULL,
   articles text NOT NULL,
   bank_Account text,
   created_on TIMESTAMP NOT NULL,
   bill text
);
