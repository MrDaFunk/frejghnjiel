import { FC, useState } from 'react';

import Form from '../../../../components/Form';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Card from '../../../../components/Card';
import CardHeader from '../../../../components/CardHeader';
import CardMedia from '../../../../components/CardMedia';
import CardContent from '../../../../components/CardContent';
import CardFooter from '../../../../components/CardFooter';
import ButtonType from '../../../../enums/button';
import InputType from '../../../../enums/input';
import { Change as ChangeEvent } from '../../../../interfaces/event';
import { useState as useStoreState, useDispatch } from '../../../../store/State';
import { LOG_IN } from '../../../../store/auth';

import login from './LoginForm.service';
import Credentials from './LoginForm.interface';
import CredentialsFieldType from './LoginForm.enums';

const LoginForm: FC = () => {
	const [username, setUsername] =
		useState<Credentials[CredentialsFieldType.USERNAME]>('');
	const [password, setPassword] =
		useState<Credentials[CredentialsFieldType.PASSWORD]>('');
	const [isError, setIsError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>('');
	const {
		config: { isDarkmodeOn },
	} = useStoreState();
	const dispatch = useDispatch();

	const handleSubmit = async () => {
		if (username === '' || password === '') {
			return;
		}

		const response = await login({
			username,
			password,
		});
		const {
			success,
			data: { token } = { token: '' },
			message = '',
		} = await response.json();
		if (success) {
			dispatch(LOG_IN(token));
		} else {
			setErrorMessage(message);
			setIsError(true);
		}
	};

	const changeUserName = ({ target: { value } }: ChangeEvent) =>
		setUsername(value);

	const changePassword = ({ target: { value } }: ChangeEvent) =>
		setPassword(value);

	return (
		<Card shadow middle fullHeight>
			<Form onSubmit={handleSubmit}>
				<CardHeader subheader={'Log in'} />
				<CardMedia
					image={isDarkmodeOn ? 'dark-logo.png' : 'logo.png'}
					title={'Logo'}
				/>
				<CardContent>
					<Input
						value={username}
						autoFocus
						label={'User'}
						onChange={changeUserName}
						required
					/>
					<Input
						value={password}
						type={InputType.PASSWORD}
						label={'Password'}
						onChange={changePassword}
						required
					/>
				</CardContent>
				<CardFooter>
					<Button type={ButtonType.SUBMIT}>Access</Button>
				</CardFooter>
			</Form>
			{isError && <p>{errorMessage}</p>}
		</Card>
	);
};

export default LoginForm;
