import { FC, useState } from "react";

import Button from "../../../../components/Button";
import Crud from "../../../../components/Crud";

import { TEAM_PATH } from "../../../../constants/api";

import SoloQModal from "../../components/SoloQModal";
import ScrimModal from "../../components/ScrimModal";
import HEADERS from "../../constants/table";

const TeamMakerHome: FC = () => {
  const [showSoloQModal, setShowSoloQModal] = useState<number | undefined>();
  const [showScrimModal, setShowScrimModal] = useState<boolean>(false);
  const onClose = () => setShowScrimModal(!showScrimModal);
  return (
    <>
      <Button onClick={() => onClose()}>Add Match</Button>
      <Crud
        url={`${TEAM_PATH}?type=player`}
        headers={HEADERS}
        action={{
          name: "Add SoloQ",
          width: 150,
          onClick: (id: number) => {
            setShowSoloQModal(id);
          }
        }}
      />
      {showSoloQModal && (
        <SoloQModal
          onClose={() => setShowSoloQModal(undefined)}
          playerId={showSoloQModal ?? 0}
        />
      )}
      {showScrimModal && <ScrimModal onClose={() => onClose()} />}
    </>
  );
};

export default TeamMakerHome;
