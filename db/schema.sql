DROP DATABASE IF EXISTS burgers_DB;
CREATE DATABASE burgers_DB;

CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT false
);
