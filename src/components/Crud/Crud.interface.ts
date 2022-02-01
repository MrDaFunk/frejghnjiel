import { FC } from "react";

import { Header } from "../../interfaces/table";

interface Props {
  idFilter?: string;
  url: string;
  // title: string;
  headers: Header[];
  filters?: FC;
  form?: FC;
  // group?: Groups;
  action?: {
    name: string;
    width?: number;
    onClick: (id: number) => void;
  };
}

export default Props;
