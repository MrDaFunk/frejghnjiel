import { FC, forwardRef } from "react";

import Modal from "../../../../components/Modal";

import Props from "./SoloQModal.interface";

const SoloQModal: FC<Props> = forwardRef(({ onClose, playerId }, ref) => {
  return (
    <Modal
      ref={ref}
      labelledby={`modal-soloq-${playerId}`}
      describedby="modal-to-add-soloq-matches"
      open
      onClose={onClose}
      title="SoloQ Match"
    >
      SoloQ sdhfjgklhjk
    </Modal>
  );
});

export default SoloQModal;
