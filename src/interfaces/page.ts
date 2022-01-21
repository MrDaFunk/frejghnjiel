import { Location } from 'history';

type LocationProps = Location<{
	referer?: { pathname?: string };
}>;

interface Props {
	location?: LocationProps | Location<unknown>;
}

export type { Props, LocationProps };
