1) install postgress
1.1 psql -U postgres
1.2 create database CREATE DATABASE shop_db
1.3 \connect shop_db
1.4 
create TABLE person(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);
1.5
create TABLE goods(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    price INTEGER,
    picture TEXT
);

2) shop/server/db.js enter your options
3) shop/server npm install
4) npm run start

5) dir shop npm install
5.1 npm run start 
