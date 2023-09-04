select
	*
from
	converted_imported_data
where
	ROWID = 1
UNION ALL
select
	*
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
	*
from
	converted_imported_data
where
	ROWID in (
	select
		max(ROWID)
	from
		converted_imported_data);
