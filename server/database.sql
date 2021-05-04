
create TABLE person(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

create TABLE goods(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    price INTEGER,
    picture TEXT
);