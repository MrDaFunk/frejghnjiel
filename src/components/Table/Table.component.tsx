import { FC } from 'react';

import TableHeader from '../../components/TableHeader';
import TablePagination from '../../components/TablePagination';

import { Rows } from '../../interfaces/table';

import { Props, Col } from './Table.interface';
import { PAGE_SIZE, ROWS_PER_PAGE } from './Table.constants';
import StyledTable from './Table.styled';

const Table: FC<Props> = ({ data, headers, fileName }) => {
	if (data.length === 0) {
		return null;
	}

	const columns: Col[] = [
		{ field: 'id', headerName: '#', width: 60 },
		...headers.map(({ name, header, width }) =>
			// const headerName = `${columnName.charAt(0).toUpperCase()}${columnName.slice(
			// 	1
			// )}`;
			width
				? {
						field: name,
						headerName: header,
						width,
				  }
				: {
						field: name,
						headerName: header,
				  }
		),
	];
	const rows: Rows = data;
	return (
		<>
			{fileName && (
				<TableHeader
					data={data}
					headers={headers.map(({ header }) => header).join(',')}
					fileName={fileName}
				/>
			)}
			<StyledTable
				rows={rows}
				columns={columns}
				pageSize={PAGE_SIZE}
				rowsPerPageOptions={ROWS_PER_PAGE}
				components={{
					Pagination: TablePagination,
				}}
				checkboxSelection
			/>
		</>
	);
};

export default Table;
