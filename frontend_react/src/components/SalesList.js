import { useEffect, useState } from 'react'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { NoData } from '../utils/constants';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import SaleItem from './SaleItem';

const SalesList = ({ nom, prenom }) => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchFromAPI(`ventes/?nom=${nom}&prenom=${prenom}`)
    .then((response) => {
      setSales(response.data);
    })
    .catch((error) => {})
  }, [nom, prenom]);
  

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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Éffectuée le</TableCell>
            <TableCell align="right">Clôturée le</TableCell>
            <TableCell align="right">Monnaie</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Adresse de facturation</TableCell>
            <TableCell align="right">Adresse de livraison</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sales.map((sale) => (
            <SaleItem saleObject={sale} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SalesList