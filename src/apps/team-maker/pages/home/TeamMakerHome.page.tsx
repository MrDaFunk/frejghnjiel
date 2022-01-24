import { FC } from "react";

import Crud from "../../../../components/Crud";
import { TEAM_PATH } from "../../../../constants/api";

import HEADERS from "../../constants/table";

const TeamMakerHome: FC = () => (
  <Crud url={`${TEAM_PATH}?type=player`} headers={HEADERS} />
);

export default TeamMakerHome;
