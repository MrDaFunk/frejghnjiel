import { GridColDef } from '@mui/x-data-grid';

import { Rows, Header } from '../../interfaces/table';

type Col = GridColDef;

interface Props {
	data: Rows;
	headers: Header[];
	fileName?: string;
}

export type { Props, Col };
