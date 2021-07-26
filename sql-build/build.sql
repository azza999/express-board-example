ADD USER web;
ALTER USER 'web'@'%' IDENTIFIED WITH mysql_native_password BY 'bks';

DROP DATABASE express_board;
CREATE DATABASE express_board;

use express_board;

GRANT ALL PRIVILEGES ON express_board.* TO 'web'@'%';

DROP TABLE users;
CREATE TABLE users (
	uid VARCHAR(20) NOT NULL PRIMARY KEY,
	uname VARCHAR(10) NOT NULL,
	upassword VARCHAR(1000) NOT NULL,
	uregister_date datetime NOT NULL DEFAULT NOW()
);

DROP TABLE boards;
CREATE TABLE boards (
	bid INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	uid VARCHAR(20) NOT NULL,
	btitle VARCHAR(100) NOT NULL,
	bcontent VARCHAR(1000) NOT NULL,
	bupdate datetime NOT NULL DEFAULT NOW(),
	bhit INT(11) NOT NULL DEFAULT 0,
	FOREIGN KEY(uid) references users(uid)
	ON DELETE CASCADE
);