import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { Rows, Header } from "../../interfaces/table";

type Col = GridColDef;

type RenderCellParams = GridRenderCellParams;

interface Props {
  data: Rows;
  headers: Header[];
  fileName?: string;
  selectable?: boolean;
  action?: {
    name: string;
    width?: number;
    onClick: (id: number) => void;
  };
}

export type { Props, Col, RenderCellParams };
