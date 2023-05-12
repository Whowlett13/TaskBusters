-- DROP DATABASE
DROP DATABASE IF EXISTS task_busters;

-- CREATE DATABASE
CREATE DATABASE task_busters;

-- Pointing to employees database
USE task_busters;

-- Jobs Table
CREATE TABLE jobs (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(200) NOT NULL,
    location VARCHAR(30),
    job_date date,
    hourly_wage INT,
    duration_hours INT,
    PRIMARY KEY (id)
);
