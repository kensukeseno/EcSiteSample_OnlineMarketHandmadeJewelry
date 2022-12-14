import React from "react";
import { useTable, Column } from "react-table";
import { Cols } from "../Product";

type ProductTableProps = { data: Cols[] };

const ArtistTable: React.FC<ProductTableProps> = ({ data }) => {
  const columns: Column<Cols>[] = React.useMemo(
    () => [
      {
        Header: "Photo",
        accessor: "photo",
      },
      {
        Header: "Product",
        accessor: "product",
      },
      {
        Header: "Price",
        accessor: "price",
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
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
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
