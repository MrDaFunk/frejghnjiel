import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../../../components/Form";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Card from "../../../../components/Card";
import CardHeader from "../../../../components/CardHeader";
import CardMedia from "../../../../components/CardMedia";
import CardContent from "../../../../components/CardContent";
import CardFooter from "../../../../components/CardFooter";
import ButtonType from "../../../../enums/button";
import InputType from "../../../../enums/input";
import { Change as ChangeEvent } from "../../../../interfaces/event";
import { useDispatch } from "../../../../store/State";
import { LOG_IN } from "../../../../store/auth";

import { TeamMakerAppPath } from "../../../../enums/path";

import login from "./LoginForm.service";
import Credentials from "./LoginForm.interface";
import CredentialsFieldType from "./LoginForm.enums";

const LoginForm: FC = () => {
  const [username, setUsername] = useState<
    Credentials[CredentialsFieldType.USERNAME]
  >("");
  const [password, setPassword] = useState<
    Credentials[CredentialsFieldType.PASSWORD]
  >("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (username === "" || password === "") {
      return;
    }

    const response = await login({
      username,
      password
    });
    console.log(response);
    const { ok, statusText = "" } = await response;
    const resp = await response.json();

    if (ok && resp && resp.length > 0) {
      dispatch(LOG_IN(`session!${username}`));
      navigate(TeamMakerAppPath.HOMEPAGE, { replace: true });
    } else {
      setErrorMessage(statusText);
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
        <CardHeader subheader={"Iniciar sesion"} />
        <CardMedia image={"logo.png"} title={"Logo"} />
        <CardContent>
          <Input
            value={username}
            autoFocus
            label={"Usuario"}
            onChange={changeUserName}
            required
          />
          <Input
            value={password}
            type={InputType.PASSWORD}
            label={"Contraseña"}
            onChange={changePassword}
            required
          />
        </CardContent>
        <CardFooter>
          <Button type={ButtonType.SUBMIT}>Accesar</Button>
        </CardFooter>
      </Form>
      {isError && <p>{errorMessage}</p>}
    </Card>
  );
};

export default LoginForm;
