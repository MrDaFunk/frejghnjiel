import { FC, forwardRef } from "react";

import Modal from "../../../../components/Modal";

import Props from "./ScrimModal.interface";

const ScrimModal: FC<Props> = forwardRef(({ onClose }, ref) => {
  return (
    <Modal
      ref={ref}
      labelledby="modal-scrim"
      describedby="modal-to-add-scrims"
      open
      onClose={onClose}
      title="Scrim Match"
    >
      Scrim sdhfjgklhjk
    </Modal>
  );
});

export default ScrimModal;
