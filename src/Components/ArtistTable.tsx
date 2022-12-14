import React from "react";
import { useTable, Column } from "react-table";
import { Cols } from "../Home";

type ArtistTableProps = { data: Cols[] };

const ArtistTable: React.FC<ArtistTableProps> = ({ data }) => {
  const columns: Column<Cols>[] = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Photo",
        accessor: "photo",
      },
      {
        Header: "Base",
        accessor: "base",
      },
      {
        Header: "ProductList",
        accessor: "productList",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Cols>({
      columns,
      data,
    });

  return (
    <form action="product">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, n) => {
                  if (n == 0) {
                    return (
                      <td {...cell.getCellProps()}>
                        <button
                          onClick={debugfunc}
                          type="submit"
                          name="name"
                          value={cell.value}
                        >
                          {cell.render("Cell")}
                        </button>
                      </td>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
};

const debugfunc = (event: React.MouseEvent<HTMLElement>) => {
  console.log("OK");
};

export default ArtistTable;
