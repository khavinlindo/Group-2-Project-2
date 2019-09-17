CREATE DATABASE daytimer_db;
USE daytimer_db;

CREATE TABLE grocery (
    id int NOT NULL AUTO_INCREMENT,
    item VARCHAR(255) NOT NULL,
    catagory VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE task (
    id int NOT NULL AUTO_INCREMENT,
    task VARCHAR(255) NOT NULL,
    urgency VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE notes (
    id int NOT NULL AUTO_INCREMENT,
    note VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);


