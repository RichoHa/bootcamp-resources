--Include preferences /sql editor/ other/untick box


-- Data base stores data
-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS animals_db;
-- Creates the "animals_db" database --
CREATE DATABASE animals_db;

-- Makes it so all of the following code will affect animals_db --
USE animals_db;

drop table people;
-- removes table called people.

show table;
-- identify if taables exist


show databases;
-- identify iall databases



-- Creates the table "people" within animals_db --
-- Define the column of the table - what is it and type
-- When exectured can be seen in the tables file.
CREATE TABLE people ( 
  -- Makes a string column called "name" which cannot contain null --
  -- Name Type-Limit of 30 Characters-NotNull = can't be empty.
  name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  has_pet BOOLEAN NOT NULL,
  -- Makes a sting column called "pet_name" --
  pet_name VARCHAR(30),
  -- Makes an numeric column called "pet_age" --
  -- A number no longer than 10 digits...
  pet_age INTEGER(10)
);

-- Creates new rows containing data in all named columns --
INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Jacob", TRUE, "Misty", 10);

INSERT INTO people (name, has_pet)
VALUES ("Peter", false);


update people set pet_age = 450 where name = "Rami";

-- Updates the row where the column name is peter --
UPDATE people
SET has_pet = true, pet_name = "Franklin", pet_age = 2
WHERE name = "Peter";

-- select name from people where has_pet =true;
-- select all rows in the name column which has rows including has_pet is true.

-- 