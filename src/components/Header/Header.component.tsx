import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useState as useStoreState, useDispatch } from "../../store/State";
import { LOG_OUT } from "../../store/auth";

import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";

import { APPS } from "../../constants/config";
import MODULES from "../../constants/module";

const Header: FC = () => {
  const {
    auth: { hasSession }
  } = useStoreState();
  const [toggle, setToggle] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => dispatch(LOG_OUT());

  const redirect = (path: string) => navigate(path);

  const toggleDrawer = () => setToggle(!toggle);

  const menuOptionHandler = (action: () => void) => {
    toggleDrawer();
    action();
  };

  if (!hasSession) {
    return null;
  }

  return (
    <>
      <nav>
        <Button onClick={() => toggleDrawer()}>Menu</Button>
      </nav>
      <Sidebar open={toggle} onClose={() => toggleDrawer()}>
        {MODULES.filter(
          ({ app, isRootPath }) => APPS?.indexOf(app) !== -1 && isRootPath
        ).map(({ app, path }) => (
          <Button
            key={app}
            onClick={() => menuOptionHandler(() => redirect(path))}
          >
            {`${app.charAt(0).toUpperCase()}${app.slice(1)}`}
          </Button>
        ))}
        <Button onClick={() => menuOptionHandler(() => signOut())}>
          Cerrar Sesion
        </Button>
      </Sidebar>
    </>
  );
};

export default Header;
