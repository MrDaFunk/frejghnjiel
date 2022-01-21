import { FC } from 'react';

import { useGridApiContext, useGridState } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';

const TablePagination: FC = () => {
	const apiRef = useGridApiContext();
	const [state] = useGridState(apiRef);

	return (
		<Pagination
			color='primary'
			count={state.pagination.pageCount}
			page={state.pagination.page + 1}
			onChange={(_event, value) => apiRef.current.setPage(value - 1)}
			variant='outlined'
		/>
	);
};

export default TablePagination;
