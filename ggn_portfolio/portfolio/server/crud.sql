-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
-- flush privileges;

USE portfolio;

-- CONTACTS

-- DROP TABLE contacts;

-- CREATE TABLE contacts (
-- 	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(128) NOT NULL,
--     email VARCHAR(320) NOT NULL,
--     message TEXT(500) NOT NULL
-- ) ENGINE=InnoDB;

INSERT INTO contacts (name, email, message) VALUES (
	"John", "jc1@gmail.com", 
	"hey! mail me. you got a selected for a job at pixar!"
);

-- PROJECTS

-- DROP TABLE projects; 

-- CREATE TABLE projects(
-- 	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(256) NOT NULL,
--     brief VARCHAR(320) NOT NULL,
--     skills VARCHAR(320) NOT NULL,
--     thumbnail VARCHAR(256) NOT NULL,
--     github VARCHAR(128) NOT NULL
-- ) ENGINE=InnoDB;

INSERT INTO projects (title, brief, skills) VALUES (
	"Tennis Racquet Data Dashboard",
	"Interactive data dashboard displaying 'tennis racquet specifications' data and data story discovered using the same.",
    "HTML5, CSS3, JavaScript, D3.js, Python, Jupyter Notebook, Pandas, NumPy, Matplotlib, Scikit-Learn"
);

UPDATE projects
SET github="https://github.com/ggn1/Tennis-Racquet-Data-Dashboard" 
WHERE id=2;

-- FILES

-- DROP TABLE files; 

CREATE TABLE files(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    src VARCHAR(256),
    embed_link VARCHAR(256),
    priority INT NOT NULL,
    project_id INT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id)
) ENGINE=InnoDB;

INSERT INTO files (title, embed_link, priority, project_id) VALUES (
	"index.js",
	"https://drive.google.com/file/d/11IYWTOyp_8ukgSZRVxHYFh7wHXz2wzmk/preview",
    6, -- priority
    2  -- project_id
);

INSERT INTO files (title, embed_link, priority, project_id) VALUES (
	"index.js",
	"https://drive.google.com/file/d/11IYWTOyp_8ukgSZRVxHYFh7wHXz2wzmk/preview",
    6, -- priority
    2  -- project_id
);

-- ALTER TABLE files AUTO_INCREMENT=8; 

-- SELECTION

SELECT id FROM projects WHERE (title = "Tennis Racquet Data Dashboard");

SELECT thumbnail FROM projects;
TRUNCATE TABLE contacts;

-- DELETE FROM files WHERE id=11;


