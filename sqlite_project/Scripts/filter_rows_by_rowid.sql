select
	rowid watched_order,
	movie_title movie_title ,
	substring(release_year, 2, 4) release_year
from
	converted_imported_data
where
	rowid = 1
union all
select
	rowid,
	movie_title,
	substring(release_year, 2, 4)
from
	converted_imported_data
where
	rowid not in(
1,
(
	select
		max(rowid)
	from
		converted_imported_data))
union all
select
	rowid,
	movie_title,
	substring(release_year, 2, 4)
from
	converted_imported_data
where
	rowid in (
	select
		max(rowid)
	from
		converted_imported_data);
