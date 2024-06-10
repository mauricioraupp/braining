CREATE DATABASE braining_db;
USE braining_db;

CREATE TABLE user_account(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
    date DATE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_settings(
	dark_mode BOOLEAN,
    volume INT
);

CREATE TABLE user_minigame1 (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    level INT NOT NULL DEFAULT 1,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_email) REFERENCES user_account(email)
);

select * from user_account;
select * from user_minigame1;

update user_level where 
CASE
    WHEN level = 1 THEN level = 2
    WHEN level = 2 THEN level = 3
    WHEN level = 3 THEN level = 4
    WHEN level = 4 THEN level = 5
END;