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

INSERT INTO projects (title, brief, skills, thumbnail, github, priority) VALUES (
	"Amazon Food Review Analysis and Classification",
	"A project that employs various data science tools and machine learning algorithms to conduct data analysis and perform classification of reviews given to edible products on Amazon. ",
    "Python, Pandas, NumPy, Matplotlib, Jupyter Notebook, NLTK, spaCy, Gensim, scikit-learn, imblearn",
    "https://i.postimg.cc/PfQx9sJn/thumbnail.png",
    "https://github.com/ggn1/Amazon-Food-Review-Classification-Group-Work",
    4
);

-- ALTER TABLE
-- ALTER TABLE projects
-- ADD priority INT NOT NULL; 

UPDATE projects
SET thumbnail = "https://i.postimg.cc/pX5GMj48/thumbnail.png" 
WHERE id = 4;

SELECT id, title, priority FROM projects;

-- FILES

-- DROP TABLE files; 

-- CREATE TABLE files(
-- 	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     src VARCHAR(256),
--     embed_link VARCHAR(256),
--     priority INT NOT NULL,
--     project_id INT NOT NULL,
--     FOREIGN KEY (project_id) REFERENCES projects(id)
-- ) ENGINE=InnoDB;

INSERT INTO files (src, priority, project_id) VALUES (
	"https://i.postimg.cc/nc4d25rW/Slide11.png",
    11, -- priority
    4  -- project_id
);

-- INSERT INTO files (embed_link, priority, project_id) VALUES (
-- 	"https://drive.google.com/file/d/1b5blCrQjf_OCuuxIX12lCSqADsn00DHI/preview",
--     3, -- priority
--     1  -- project_id
-- );

UPDATE files SET src="https://i.postimg.cc/dtY6hB6j/Slide11.png" WHERE (project_id = 4 AND priority = 11);

SELECT src FROM projects WHERE (title = "Tennis Racquet Data Dashboard");

SELECT * FROM files;
TRUNCATE TABLE contacts;

-- DELETE FROM files WHERE id=11;



