CREATE DATABASE braining_db;
USE braining_db;

CREATE TABLE user_account(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
    date DATE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profile_pic VARCHAR(255) default "default.png",
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_minigame1 (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    level INT NOT NULL DEFAULT 1,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_email) REFERENCES user_account(email)
);

CREATE TABLE user_minigame2 (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    level INT NOT NULL DEFAULT 1,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_email) REFERENCES user_account(email)
);

INSERT INTO user_account (name, date, email, password)
VALUES("admin", "1111-11-11", "admin@admin.org", "$2b$10$h45efwjjpJ0e6Xlfn5C2J..8J/wLpwuDP.BRRYtnaJSUWSusLjafi");
INSERT INTO user_minigame1 (user_email, level)
VALUES("admin@admin.org", 1);
INSERT INTO user_minigame2 (user_email, level)
VALUES("admin@admin.org", 1);

select * from user_account;
select * from user_minigame1;