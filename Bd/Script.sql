CREATE DATABASE TaskDb;
USE TaskDb;

CREATE TABLE TblTasks(
        Id INT IDENTITY(1,1) PRIMARY KEY,
        [Name] VARCHAR(200) NOT NULL,
        [Description] VARCHAR(1000) NOT NULL,
        DueDate DATE NOT NULL,
        CreateDate DATE NOT NULL,
        Completed BIT NOT NULL,
        UserId INT NOT NULL 
    )

    CREATE TABLE TblUsers(
        Id INT IDENTITY(1,1) PRIMARY KEY,
        [Email] VARCHAR(200) NOT NULL,
        [Password] VARCHAR(1000) NOT NULL,
        CreateDate DATE NOT NULL,
    )

    ALTER TABLE TblTasks ADD FOREIGN KEY (UserId) REFERENCES TblUsers (Id);