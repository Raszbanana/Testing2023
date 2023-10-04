import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const connection = async () => {
  return await open({
    filename: 'database.db',
    driver: sqlite3.Database,
  });
};

export const runDb = async () => {
  const db = await connection();
  db.exec(
    `DROP TABLE IF EXISTS grades;
    CREATE TABLE IF NOT EXISTS grades (
        nGradeID INTEGER PRIMARY KEY,
        cDenmark varchar(2) NOT NULL,
        cUSA varchar(2) NOT NULL
    );
    
    INSERT INTO grades (cDenmark, cUSA) VALUES
        ('12', 'A+'),
        ('10', 'A'),
        ('7', 'B'),
        ('4', 'C'),
        ('02', 'D'),
        ('00', 'F'),
        ('-3', 'F');`
  );
};
