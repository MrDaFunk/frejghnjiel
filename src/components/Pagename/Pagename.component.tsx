import { FC } from "react";
import { Navigate } from "react-router-dom";

import { AuthAppPath, DashboardAppPath } from "../../enums/path";

import Props from "../../interfaces/pagename";
import Header from "../../components/Header";

import useTitle from "../../hooks/useTitle";
import { useState } from "../../store/State";

const Pagename: FC<Props> = ({
  pagename,
  component: Component,
  checkSession = false,
  redirectSession = false
}) => {
  const {
    auth: { hasSession }
  } = useState();
  useTitle(pagename);

  if (checkSession && !hasSession) {
    return <Navigate to={AuthAppPath.LOGINPAGE} replace={true} />;
  }

  if (redirectSession && hasSession) {
    return <Navigate to={DashboardAppPath.HOMEPAGE} replace={true} />;
  }

  return (
    <>
      {hasSession && <Header />}
      <Component />
    </>
  );
};

export default Pagename;
