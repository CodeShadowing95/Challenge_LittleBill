import { TableCell, TableRow } from "@mui/material";
import React from "react";

const SubSalesList = ({ lineObject }) => {
  return (
    <TableRow key={lineObject.name}>
      <TableCell component="th" scope="row">
        {lineObject.name}
      </TableCell>
      <TableCell>{lineObject.size}</TableCell>
      <TableCell>{lineObject.quantity}</TableCell>
      <TableCell align="right">{lineObject.price}</TableCell>
      <TableCell align="right">{lineObject.points}</TableCell>
      <TableCell align="right">{lineObject.discount}</TableCell>
    </TableRow>
  );
};

export default SubSalesList;
