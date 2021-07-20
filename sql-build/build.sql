DROP DATABASE express_board;
CREATE DATABASE express_board;

use express_board;

CREATE TABLE users (
	uid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	uname VARCHAR(10) NOT NULL,
	upassword VARCHAR(1000) NOT NULL,
	uregister_date datetime NOT NULL
);