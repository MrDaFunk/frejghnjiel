import { FC, Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate
} from "react-router-dom";

import {
  Path,
  AuthAppPath,
  TeamMakerAppPath,
  DashboardAppPath
} from "../../enums/path";

import {
  Pagenames,
  AuthPagenames,
  TeamMakerPagenames,
  DashboardPagenames
} from "../../enums/pagename";

// import { Props as ViewProps } from "../../interfaces/page";

// import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Pagename from "../../components/Pagename";

// import { useState } from "../../store/State";

// const withSession = (
//   Component: ComponentType<any>
// ): ComponentType<any> => () => {
//   const {
//     auth: { hasSession }
//   } = useState();

//   if (!hasSession) {
//     return <Navigate to={AuthAppPath.LOGINPAGE} replace={true} />;
//   }
//   return <Component />;
// };

const Routes: FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading fullHeight />}>
      <Switch>
        <Route
          path={Path.HOMEPAGE as string}
          element={
            <Pagename
              component={lazy(() => import("../../pages/home"))}
              pagename={Pagenames.HOMEPAGE}
            />
          }
        />
        <Route
          path={AuthAppPath.LOGINPAGE as string}
          element={
            <Pagename
              component={lazy(() => import("../../apps/auth/pages/login"))}
              pagename={AuthPagenames.LOGIN}
              redirectSession={true}
            />
          }
        />
        <Route
          path={DashboardAppPath.HOMEPAGE as string}
          element={
            <Pagename
              component={lazy(() => import("../../apps/dashboard/pages/home"))}
              pagename={DashboardPagenames.HOMEPAGE}
              checkSession={true}
            />
          }
        />
        <Route
          path={TeamMakerAppPath.HOMEPAGE as string}
          element={
            <Pagename
              component={lazy(() => import("../../apps/team-maker/pages/home"))}
              pagename={TeamMakerPagenames.HOMEPAGE}
              checkSession={true}
            />
          }
        />
        <Route
          path="*"
          element={<Navigate to={Path.HOMEPAGE} replace={true} />}
        />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
