import { useEffect, useState } from 'react'
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { KeyboardArrowUpIcon, KeyboardArrowDownIcon, NoData } from '../utils/constants';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const SalesList = ({ val }) => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchFromAPI(`ventes/?customers_first_name=${val}`)
    .then((response) => {
      console.log(response);
      setSales(response.data);
    })
    .catch((error) => {})
  }, [val]);
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.created_at}
          </TableCell>
          <TableCell align="right">{row.completed_at}</TableCell>
          <TableCell align="right">{row.total}</TableCell>
          <TableCell align="right">{row.payment}</TableCell>
          <TableCell align="right">{row.points}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Détails de l'article
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Modèle</TableCell>
                      <TableCell>Taille</TableCell>
                      <TableCell align="right">Quantité</TableCell>
                      <TableCell align="right">Prix (€)</TableCell>
                      <TableCell align="right">Points de l'article</TableCell>
                      <TableCell align="right">Réductions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.line_items.map((line_item) => (
                      <TableRow key={line_item.product_model}>
                        <TableCell component="th" scope="row">
                          {line_item.product_model}
                        </TableCell>
                        <TableCell>{line_item.product_size}</TableCell>
                        <TableCell>{line_item.quantity}</TableCell>
                        <TableCell align="right">{line_item.product_price}</TableCell>
                        <TableCell align="right">{line_item.points}</TableCell>
                        <TableCell align="right">{line_item.discount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

  if (sales.length === 0) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", rowGap: 1, border: "2px dashed #d2d2d2", borderRadius: "5px", backgroundColor: "#f0f0f0", height: "20rem", width: "65rem" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "8rem", height: "8rem" }}>
          <img src={NoData} alt="No_data" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </Box>
        <Typography sx={{ fontSize: "30px", color: "#6e6e6e", fontWeight: 500 }}>Chargement des données en cours...</Typography>
      <Typography variant="body2" sx={{ color: "#a0a0a0", fontSize: "15px" }}>Si aucune donnée ne s'affiche après quelques secondes, les données n'existent pas</Typography>
    </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Éffectuée le</TableCell>
            <TableCell align="right">Clôturée le</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Moyen de paiement</TableCell>
            <TableCell align="right">Points de fidélité</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sales.map((sale) => (
            <Row key={sale.name} row={sale} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SalesList