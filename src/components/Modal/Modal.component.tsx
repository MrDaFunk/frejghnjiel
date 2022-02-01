import { memo, FC, forwardRef } from "react";
import Box from "@mui/material/Box";

import Card from "../Card";
import CardHeader from "../CardHeader";
import CardContent from "..//CardContent";
import CardFooter from "../CardFooter";

import StyledModal from "./Modal.styled";
import Props from "./Modal.interface";
import STYLE from "./Modal.constants";

const Modal: FC<Props> = forwardRef(
  (
    { children, open, onClose, title, actions, labelledby, describedby },
    ref
  ) => (
    <StyledModal
      ref={ref as any}
      open={open}
      onClose={onClose}
      aria-labelledby={labelledby}
      aria-describedby={describedby}
    >
      <Box sx={STYLE}>
        <Card shadow>
          {title && <CardHeader subheader={title} />}
          <CardContent>{children}</CardContent>
          {actions && <CardFooter>{actions}</CardFooter>}
        </Card>
      </Box>
    </StyledModal>
  )
);

export default memo(
  Modal,
  (prevProps, nextProps) => prevProps.children === nextProps.children
);
