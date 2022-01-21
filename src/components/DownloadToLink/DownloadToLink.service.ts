import { Rows } from '../../interfaces/table';

enum Type {
	CSV,
	TXT,
}

const dataToString = (data: Rows): string =>
	data
		.map(eachData =>
			Object.keys(eachData)
				.map(key => eachData[key])
				.join(',')
		)
		.join('\r\n');

const downloadFile = (
	data: Rows = [],
	fileName: string,
	format: Type = Type.CSV
): void => {
	const type = format === Type.CSV ? 'text/csv' : 'text/plain';
	const extension = format === Type.CSV ? 'csv' : 'txt';
	const dataString = dataToString(data);

	const fileBlob = new Blob([dataString], { type });
	const link = window.document.createElement('a');

	link.href = window.URL.createObjectURL(fileBlob);
	link.download = `${fileName}.${extension}`;
	link.click();
};

export { downloadFile, dataToString };
