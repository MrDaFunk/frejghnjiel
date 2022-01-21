import { FC, memo } from 'react';

import { Props, Tagname } from './Heading.interface';

const Heading: FC<Props> = ({ type, children }) => {
	const Head = `h${type}` as Tagname;

	return (
		<>
			<Head>{children}</Head>
		</>
	);
};

export default memo(
	Heading,
	(prevProps, nextProps) => prevProps.children === nextProps.children
);
