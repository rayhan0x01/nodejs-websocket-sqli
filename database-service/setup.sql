/***CREATING ALL TABLES*/
CREATE TABLE EMPLOYEE (
  EmployeeId   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  UserName    VARCHAR(40)                    NULL,
  Email        VARCHAR(100)                   NULL,
  Pin          VARCHAR(100)                   NULL,
  CreationDate DATETIME                       NULL
)
  ENGINE = INNODB;

/* INSERT DATA */
INSERT INTO EMPLOYEE (UserName, Email, Pin, CreationDate)
VALUES ('sysadmin', 'sysadmin@rh0x01.local', '31333337', '2021-03-31 13:17:17');

INSERT INTO EMPLOYEE (UserName, Email, Pin, CreationDate)
VALUES ('intern1', 'intern_001@rh0x01.local', '90000008', '2021-03-31 13:17:17');

INSERT INTO EMPLOYEE (UserName, Email, Pin, CreationDate)
VALUES ('intern2', 'intern_002@rh0x01.local', '91111118', '2021-03-31 13:17:17');
