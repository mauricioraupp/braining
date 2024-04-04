CREATE DATABASE braining_db;
USE braining_db;

CREATE TABLE user_account(
	name VARCHAR(255),
    nickname VARCHAR(255) UNIQUE,
    birthday DATETIME,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE user_settings(
	dark_mode BOOLEAN,
    volume INT
);

CREATE TABLE game_one_level(
	first_level BOOLEAN,
    second_level BOOLEAN,
    third_level BOOLEAN,
    fourth_level BOOLEAN
);

CREATE TABLE game_two_level(
	first_level BOOLEAN,
    second_level BOOLEAN,
    third_level BOOLEAN,
    fourth_level BOOLEAN
);

CREATE TABLE game_three_level(
	first_level BOOLEAN,
    second_level BOOLEAN,
    third_level BOOLEAN,
    fourth_level BOOLEAN
);