CREATE DATABASE braining_db;
USE braining_db;

CREATE TABLE user_account(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
    date DATETIME,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE user_settings(
	dark_mode BOOLEAN,
    volume INT
);

create table user_level (
	id int not null auto_increment,
    id_usuario int not null,
    level int not null,
    updated_at timestamp default current_timestamp,
	FOREIGN KEY (id_usuario) REFERENCES user_account(id)
);

update user_level where 
case level = 1 then level =2
case level = 2 then level =3

CREATE TABLE game_one_level(
    account_id INT PRIMARY KEY,
	first_level BOOLEAN default false,
    second_level BOOLEAN default false,
    third_level BOOLEAN default false,
    fourth_level BOOLEAN default false,
    FOREIGN KEY (account_id) REFERENCES user_account(id)
);

CREATE TABLE game_two_level(
    account_id INT PRIMARY KEY,
	first_level BOOLEAN default false,
    second_level BOOLEAN default false,
    third_level BOOLEAN default false,
    fourth_level BOOLEAN default false,
    FOREIGN KEY (account_id) REFERENCES user_account(id)
);

CREATE TABLE game_three_level(
    account_id INT PRIMARY KEY,
	first_level BOOLEAN default false,
    second_level BOOLEAN default false,
    third_level BOOLEAN default false,
    fourth_level BOOLEAN default false,
    FOREIGN KEY (account_id) REFERENCES user_account(id)
);