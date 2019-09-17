CREATE DATABASE daytimer_db; 
USE daytimer_db;

CREATE TABLE grocery (
    id int NOT NULL AUTO_INCREMENT,
    item VARCHAR(255) NOT NULL,
    amount INTEGER (3) DEFAULT 1,
    catagory VARCHAR(255) NOT NULL,
    entered DATE DEFAULT (CURRENT_DATE),
    PRIMARY KEY (id)
);

CREATE TABLE task (
    id int NOT NULL AUTO_INCREMENT,
    task VARCHAR(255) NOT NULL,
    urgency VARCHAR(255) NOT NULL,
    entered DATE DEFAULT (CURRENT_DATE),
    PRIMARY KEY (id)
);

CREATE TABLE notes (
    id int NOT NULL AUTO_INCREMENT,
    note VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    entered DATE DEFAULT (CURRENT_DATE),
    PRIMARY KEY (id)
);




