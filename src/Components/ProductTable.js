"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_table_1 = require("react-table");
const ArtistTable = ({ data }) => {
    const columns = react_1.default.useMemo(() => [
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
    ], []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = (0, react_table_1.useTable)({
        columns,
        data,
    });
    return ((0, jsx_runtime_1.jsx)("form", Object.assign({ action: "product" }, { children: (0, jsx_runtime_1.jsxs)("table", Object.assign({}, getTableProps(), { children: [(0, jsx_runtime_1.jsx)("thead", { children: headerGroups.map((headerGroup) => ((0, jsx_runtime_1.jsx)("tr", Object.assign({}, headerGroup.getHeaderGroupProps(), { children: headerGroup.headers.map((column) => ((0, jsx_runtime_1.jsx)("th", Object.assign({}, column.getHeaderProps(), { children: column.render("Header") })))) })))) }), (0, jsx_runtime_1.jsx)("tbody", Object.assign({}, getTableBodyProps(), { children: rows.map((row, i) => {
                        prepareRow(row);
                        return ((0, jsx_runtime_1.jsx)("tr", Object.assign({}, row.getRowProps(), { children: row.cells.map((cell, n) => {
                                return ((0, jsx_runtime_1.jsx)("td", Object.assign({}, cell.getCellProps(), { children: cell.render("Cell") })));
                            }) })));
                    }) }))] })) })));
};
exports.default = ArtistTable;
