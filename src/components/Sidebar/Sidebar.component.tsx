import { FC, memo } from 'react';

import Props from './Sidebar.interface';
import StyledSidebar from './Sidebar.styled';

const Sidebar: FC<Props> = ({ open = false, onClose, children }) => (
	<StyledSidebar open={open} onClose={onClose}>
		{children}
	</StyledSidebar>
);

export default memo(
	Sidebar,
	(prevProps, nextProps) => prevProps.children === nextProps.children
);
