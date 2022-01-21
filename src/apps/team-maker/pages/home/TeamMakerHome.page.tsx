import { FC } from 'react';

import Crud from '../../../../components/Crud';
import { PRODUCT_PATH } from '../../../../constants/api';

import HEADERS from '../../constants/table';
import FormFilters from '../../components/FormFilters';
import SearchFilters from '../../components/SearchFilters';

const TeamMakerHome: FC = () => (
	<Crud
		idFilter='product'
		url={PRODUCT_PATH}
		headers={HEADERS}
		filters={SearchFilters}
		form={FormFilters}
	/>
);

export default TeamMakerHome;
