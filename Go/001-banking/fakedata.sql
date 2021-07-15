CREATE DATABASE banking;
USE banking;

DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
    `customer_id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `date_of_birth` DATE NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `zipcode` VARCHAR(255) NOT NULL,
    `status` TINYINT(1) NOT NULL DEFAULT '1',
    PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2006 DEFAULT CHARSET=utf8;

INSERT INTO `customers` VALUES
    (2000, 'John Ive', '1978-01-01', 'New York', '10001', 1),
    (2001, 'Lora Doe', '1934-01-11', 'Delhi', '110075', 1),
    (2003, 'Ben', '1987-02-10', 'Kyiv', '04205', 0),
    (2004, 'Jane Doe', '1980-03-01', 'Wroclaw', '50210', 1),
    (2005, 'Osman', '2000-04-05', 'New York', '11010', 0);

DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
    `account_id` INT(11) NOT NULL AUTO_INCREMENT,
    `customer_id` INT(11) NOT NULL,
    `opening_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `account_type` VARCHAR(255) NOT NULL,
    `amount` DECIMAL(10,2) NOT NULL,
    `status` TINYINT(1) NOT NULL DEFAULT '1',
    PRIMARY KEY (`account_id`),
    INDEX `customer_id` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` VALUES
    (1, 2000, '2007-01-01 10:11:00', 'Checking', '100.00', 1),
    (2, 2000, '2009-03-11 20:02:00', 'Savings', '200.00', 1),
    (3, 2001, '2020-02-20 01:40:00', 'Checking', '400.00', 1);

DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions` (
    `transaction_id` INT(11) NOT NULL AUTO_INCREMENT,
    `account_id` INT(11) NOT NULL,
    `amount` DECIMAL(10,2) NOT NULL,
    `transaction_type` VARCHAR(10) NOT NULL,
    `transaction_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`transaction_id`),
    FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

INSERT INTO `transactions` VALUES
    (1, 1, -1000, 'Withdrawal', '2020-04-27 11:23:00'),
    (2, 2, 1000, 'Deposit', '2021-10-20 13:03:01'),
    (3, 2, -1000, 'Withdrawal', '2019-03-21 15:22:11'),
    (4, 2, 300, 'Deposit', '2021-04-27 12:57:10'),
    (5, 3, -1000, 'Withdrawal', '2020-04-22 11:13:20'),
    (6, 3, 1000, 'Deposit', '2020-03-20 15:25:34');
