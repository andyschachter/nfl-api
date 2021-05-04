CREATE database nfl;

USE nfl;

CREATE table teams (
  id INT auto_increment,
  location VARCHAR(255),
  mascot VARCHAR(255),
  abbreviation VARCHAR(10),
  conference ENUM('AFC', 'NFC'),
  division ENUM('East', 'West', 'North', 'South'),
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

INSERT INTO teams (location, mascot, abbreviation, conference, division) 
VALUES 
  ('Buffalo', 'Bills', 'BUF', 'AFC', 'East'),
  ('Miami', 'Dolphins', 'MIA', 'AFC', 'East'),
  ('New England', 'Patriots', 'NE', 'AFC', 'East'),
  ('New York', 'Jets', 'NYJ', 'AFC', 'East'),
  ('Baltimore', 'Ravens', 'BAL', 'AFC', 'North'),
  ('Cincinnati', 'Bengals', 'CIN', 'AFC', 'North'),
  ('Cleveland', 'Browns', 'CLE', 'AFC', 'North'),
  ('Pittsburgh', 'Steelers', 'PIT', 'AFC', 'North'),
  ('Houston', 'Texans', 'HOU', 'AFC', 'South'),
  ('Indianapolis', 'Colts', 'IND', 'AFC', 'South'),
  ('Jacksonville', 'Jaguars', 'JAX', 'AFC', 'South'),
  ('Tennessee', 'Titans', 'TEN', 'AFC', 'South'),
  ('Denver', 'Broncos', 'DEN', 'AFC', 'West'),
  ('Kansas City', 'Chiefs', 'KC', 'AFC', 'West'),
  ('Los Angeles', 'Chargers', 'LAC', 'AFC', 'West'),
  ('Oakland', 'Raiders', 'OAK', 'AFC', 'West'),
  ('Dallas', 'Cowboys', 'DAL', 'NFC', 'East'),
  ('New York', 'Giants', 'NYG', 'NFC', 'East'),
  ('Philadelphia', 'Eagles', 'PHI', 'NFC', 'East'),
  ('Washington', 'Redskins', 'WSH', 'NFC', 'East'),
  ('Chicago', 'Bears', 'CHI', 'NFC', 'North'),
  ('Detriot', 'Lions', 'DET', 'NFC', 'North'),
  ('Green Bay', 'Packers', 'GB', 'NFC', 'North'),
  ('Minnesota', 'Vikings', 'MIN', 'NFC', 'North'),
  ('Atlanta', 'Falcons', 'ATL', 'NFC', 'South'),
  ('Carolina', 'Panthers', 'CAR', 'NFC', 'South'),
  ('New Orleans', 'Saints', 'NO', 'NFC', 'South'),
  ('Tampa Bay', 'Buccaneers', 'TB', 'NFC', 'South'),
  ('Arizona', 'Cardinals', 'ARI', 'NFC', 'West'),
  ('Los Angeles', 'Rams', 'LAR', 'NFC', 'West'),
  ('San Francisco', '49ers', 'SF', 'NFC', 'West'),
  ('Seattle', 'Seahawks', 'SEA', 'NFC', 'West');





