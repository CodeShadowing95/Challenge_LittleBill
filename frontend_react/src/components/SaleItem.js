import { TableCell, TableRow } from "@mui/material";

const SaleItem = ({ saleObject }) => {
  return (
    <TableRow
      key={saleObject.sale_id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {saleObject.created_at}
      </TableCell>
      <TableCell align="right">{saleObject.completed_at}</TableCell>
      <TableCell align="right">{saleObject.currency}</TableCell>
      <TableCell align="right">{saleObject.total}</TableCell>
      <TableCell align="right">{saleObject.billing_address}</TableCell>
      <TableCell align="right">{saleObject.shipping_address}</TableCell>
    </TableRow>
  );
};

export default SaleItem;
