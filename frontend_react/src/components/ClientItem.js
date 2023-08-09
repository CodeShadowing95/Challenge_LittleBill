import { TableCell, TableRow } from "@mui/material";
import SalesDetailsBtn from "./SalesDetailsBtn";

const ClientItem = ({ clientObject }) => {
  return (
    <TableRow
      key={clientObject.customers_id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {clientObject.last_name}
      </TableCell>
      <TableCell align="right">{clientObject.first_name}</TableCell>
      <TableCell align="right">{clientObject.phone}</TableCell>
      <TableCell align="right">{clientObject.email}</TableCell>
      <TableCell align="right">{clientObject.country === "FRA" && "France"}</TableCell>
      <TableCell align="right">{clientObject.loyalty_points}</TableCell>
      <TableCell align="right">{clientObject.last_order_date}</TableCell>
      <TableCell align="right"><SalesDetailsBtn nom={clientObject.last_name} prenom={clientObject.first_name} /></TableCell>
    </TableRow>
  );
};

export default ClientItem;
