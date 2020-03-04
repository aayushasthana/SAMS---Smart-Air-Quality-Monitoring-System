USE test_sams_db;

CREATE TABLE airQuality (piTime DATETIME, piNUM TINYINT UNSIGNED, piNAME VARCHAR(24), piCO2 SMALLINT UNSIGNED, piTVOC SMALLINT UNSIGNED, piTemp FLOAT, piHumidity FLOAT );

INSERT INTO airQuality (piTime, piNUM, piNAME, piCO2, piTVOC, piTemp, piHumidity)
VALUES ('1970-01-01 00:00:01', 1, 'Master Bedroom', 400, 4, 69.2, 45.9)
