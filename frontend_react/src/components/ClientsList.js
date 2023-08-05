import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Pagination, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import SalesDetailsBtn from './SalesDetailsBtn';
import { NoData } from '../utils/constants';


const ClientsList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchFromAPI("clients/")
    .then((response) => {
      setClients(response.data);
    })
    .catch((error) => {})
  }, []);
  
  // console.log(clients);

  if (clients.length === 0) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", rowGap: 1, border: "2px dashed #d2d2d2", borderRadius: "5px", backgroundColor: "#f0f0f0", height: "20rem", width: "65rem" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "8rem", height: "8rem" }}>
          <img src={NoData} alt="No_data" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </Box>
        <Typography sx={{ fontSize: "30px", color: "#6e6e6e", fontWeight: 500 }}>Aucune donnée à afficher pour le moment...</Typography>
      <Typography variant="body2" sx={{ color: "#a0a0a0", fontSize: "15px" }}>Veuillez rafraîchir la page si le problème persiste</Typography>
    </Box>
    );
  }

  return(
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell align="right">Prénom</TableCell>
            <TableCell align="right">Téléphone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Pays</TableCell>
            <TableCell align="right">Points de fidélite</TableCell>
            <TableCell align="right">Dernière commande</TableCell>
            <TableCell align="right">Opérations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            client.first_name !== "" && <TableRow
              key={client.customers_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {client.last_name}
              </TableCell>
              <TableCell align="right">{client.first_name}</TableCell>
              <TableCell align="right">{client.phone}</TableCell>
              <TableCell align="right">{client.email}</TableCell>
              <TableCell align="right">{client.country === "FRA" && "France"}</TableCell>
              <TableCell align="right">{client.loyalty_points}</TableCell>
              <TableCell align="right">{client.last_order_date}</TableCell>
              <TableCell align="right"><SalesDetailsBtn customer_id={client.first_name} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    <Stack spacing={2} sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
      <Pagination count={1} variant="outlined" shape="rounded" size="large" />
    </Stack>
    </>
  );
};

export default ClientsList