import { GridRowsProp } from '@mui/x-data-grid';

type Rows = GridRowsProp;

interface Header {
	name: string;
	header: string;
	width?: number;
}

export type { Rows, Header };
