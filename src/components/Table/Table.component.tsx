import { FC } from "react";

import Button from "../../components/Button";
import TableHeader from "../../components/TableHeader";
import TablePagination from "../../components/TablePagination";

import { Rows } from "../../interfaces/table";

import { Props, Col, RenderCellParams } from "./Table.interface";
import { PAGE_SIZE, ROWS_PER_PAGE } from "./Table.constants";
import StyledTable from "./Table.styled";

const Table: FC<Props> = ({
  data,
  headers,
  fileName,
  selectable = false,
  action
}) => {
  if (data.length === 0) {
    return null;
  }

  const columns: Col[] = [
    { field: "id", headerName: "#", width: 60 },
    ...headers.map(({ name, header, width }) =>
      // const headerName = `${columnName.charAt(0).toUpperCase()}${columnName.slice(
      // 	1
      // )}`;
      width
        ? {
            field: name,
            headerName: header,
            width
          }
        : {
            field: name,
            headerName: header
          }
    )
  ];
  if (action) {
    const { name, width, onClick } = action;
    columns.push({
      field: "actions",
      headerName: "",
      width,
      renderCell: ({ id }: RenderCellParams) => (
        <Button onClick={() => onClick(id as number)}>{name}</Button>
      )
    });
  }

  const rows: Rows = data;
  return (
    <>
      {fileName && (
        <TableHeader
          data={data}
          headers={headers.map(({ header }) => header).join(",")}
          fileName={fileName}
        />
      )}
      <StyledTable
        rows={rows}
        columns={columns}
        pageSize={PAGE_SIZE}
        rowsPerPageOptions={ROWS_PER_PAGE}
        components={{
          Pagination: TablePagination
        }}
        checkboxSelection={selectable}
      />
    </>
  );
};

export default Table;
