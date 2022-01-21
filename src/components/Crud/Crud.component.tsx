import { FC } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { Rows } from '../../interfaces/table';

import Storage from '../../enums/storage';

import Table from '../../components/Table';
import Card from '../../components/Card';
import CardContent from '../../components/CardContent';
import Loading from '../../components/Loading';
import ExpandableCard from '../../components/ExpandableCard';

import { get } from '../../services/storage';

import Props from './Crud.interface';
import FilterContainer from './Crud.styled';
import useCrud from './useCrud';

const Crud: FC<Props> = ({
	idFilter,
	url,
	headers,
	filters: SearchFilters,
	form: FormFilters,
}) => {
	const token = get<string>(Storage.TOKEN, '') || '';
	const [{ data }] = useCrud<Rows>(`${url}get`, token);

	return (
		<>
			{SearchFilters && idFilter && (
				<ExpandableCard
					id={idFilter}
					title={
						<FilterContainer>
							<FilterAltIcon />
							Filters
						</FilterContainer>
					}
				>
					<SearchFilters />
				</ExpandableCard>
			)}

			<Card shadow middle extended>
				<CardContent>
					{!data && <Loading />}
					{data && (
						<Table data={data} headers={headers} fileName={idFilter} />
					)}
				</CardContent>
			</Card>
		</>
	);
};

export default Crud;
