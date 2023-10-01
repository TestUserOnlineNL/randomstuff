/* verwijder oude data */
DROP TABLE IF EXISTS 
	converted_imported_data;

/* create table from new imported data */
CREATE TABLE 
	converted_imported_data  
AS SELECT 
	SUBSTRING(moviedata, 1, (INSTR(moviedata,"("))-2) AS MOVIE_TITLE,
	SUBSTRING(moviedata, (INSTR(moviedata,"(")),6) AS RELEASE_YEAR
FROM 
	watched_movies_import;
	
/* count rows */
SELECT COUNT(*) "number_of_rows" FROM converted_imported_data;