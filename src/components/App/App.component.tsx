import { FC } from 'react';

import Theme from '../../components/Theme';
import Routes from '../../components/Routes';
import State from '../../store/State';

const App: FC = () => (
	<State>
		<Theme>
			<Routes />
		</Theme>
	</State>
);

export default App;
