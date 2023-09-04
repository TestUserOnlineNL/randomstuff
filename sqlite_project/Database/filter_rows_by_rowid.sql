select
	TITLE MOVIE_TITLE,
	substring(YEAR,2,4) RELEASE_YEAR
from
	converted_imported_data
where
	ROWID = 1
UNION ALL
select
	TITLE,
	substring(YEAR,2,4)
from
	converted_imported_data
where
	ROWID not in(
1,
(
	select
		max(ROWID)
	from
		converted_imported_data))
UNION ALL
select
	TITLE,
	substring(YEAR,2,4)
from
	converted_imported_data
where
	ROWID in (
	select
		max(ROWID)
	from
		converted_imported_data);
