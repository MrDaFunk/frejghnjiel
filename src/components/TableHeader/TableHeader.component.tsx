import { FC } from 'react';

import DownloadToLink from '../../components/DownloadToLink';

import { Rows } from '../../interfaces/table';

import Container from './TableHeader.styled';

interface Props {
	data: Rows;
	fileName: string;
	headers: string;
}

const TableHeader: FC<Props> = ({ data, fileName, headers }) => (
	<Container>
		<DownloadToLink data={data} fileName={fileName} headers={headers} />
	</Container>
);

export default TableHeader;
