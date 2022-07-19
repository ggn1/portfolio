-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
-- flush privileges;

USE portfolio;

-- contacts
CREATE TABLE contacts (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    email VARCHAR(320) NOT NULL,
    message TEXT(500) NOT NULL
) ENGINE=InnoDB;

INSERT INTO contacts (name, email, message) VALUES (
	"John", "jc1@gmail.com", 
	"hey! mail me. you got a selected for a job at pixar!"
);

TRUNCATE TABLE contacts;

SELECT * FROM contacts;

-- projects
CREATE TABLE projects(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    brief VARCHAR(320) NOT NULL
) ENGINE=InnoDB;

INSERT INTO projects (title, brief) VALUES (
	"COVID-19 Data Dashboard",
	"Interactive data dashboard displaying 3 years worth of real-world COVID-19 data and data story discovered using the same."
);

SELECT id FROM projects WHERE (title = "COVID-19 Data Dashboard");

-- videos
CREATE TABLE videos(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    embed_text VARCHAR(500) NOT NULL,
    project_id INT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id)
) ENGINE=InnoDB;

INSERT INTO videos (embed_text, project_id) VALUES (
	"COVID-19 Data Dashboard",
	"Interactive data dashboard displaying 3 years worth of real-world COVID-19 data and data story discovered using the same."
);




