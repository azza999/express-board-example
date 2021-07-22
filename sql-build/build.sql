ADD USER web;
ALTER USER 'web'@'%' IDENTIFIED WITH mysql_native_password BY 'bks';

DROP DATABASE express_board;
CREATE DATABASE express_board;

use express_board;

GRANT ALL PRIVILEGES ON express_board.* TO 'web'@'%';


CREATE TABLE users (
	uid VARCHAR(20) NOT NULL PRIMARY KEY,
	uname VARCHAR(10) NOT NULL,
	upassword VARCHAR(1000) NOT NULL,
	uregister_date datetime NOT NULL DEFAULT NOW()
);