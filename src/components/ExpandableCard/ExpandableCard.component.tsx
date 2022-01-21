import { FC, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from '../../components/Card';
import CardHeader from '../../components/CardHeader';
import CardContent from '../../components/CardContent';

import Props from './ExpandableCard.interface';

const ExpandableCard: FC<Props> = ({
	id,
	title,
	children,
	expanded = false,
}) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(expanded);

	return (
		<Card shadow middle extended>
			<Accordion expanded={isExpanded} onChange={() => setIsExpanded(!isExpanded)}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls={`panel-${id}-content`}
					id={id}
				>
					<CardHeader subheader={title} />
				</AccordionSummary>
				<AccordionDetails>
					<CardContent>{children}</CardContent>
				</AccordionDetails>
			</Accordion>
		</Card>
	);
};

export default ExpandableCard;
