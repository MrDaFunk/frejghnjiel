import { FC } from 'react';
import Download from '@mui/icons-material/Download';

import { Rows } from '../../interfaces/table';
import Button from '../../components/Button';
import useTranslator from '../../hooks/useTranslator';

// import { downloadFile } from './DownloadToLink.service';

interface Props {
	data: Rows;
	fileName: string;
	headers: string;
}

const dataToString = (data: Rows, headers: string): string =>
	`ID,${headers}\r\n${data
		.map(eachData =>
			Object.keys(eachData)
				.map(key => eachData[key])
				.join(',')
		)
		.join('\r\n')}`;

const DownloadToLink: FC<Props> = ({ data, fileName, headers }) => {
	const [t] = useTranslator();
	return (
		<a
			title={t('Download as CSV')}
			href={window.URL.createObjectURL(
				new Blob([dataToString(data, headers)], { type: 'text/csv' })
			)}
			download={`${fileName}.csv`}
			style={{ color: 'inherit' }}
		>
			<Button>
				<Download />
			</Button>
		</a>
	);
};

export default DownloadToLink;
