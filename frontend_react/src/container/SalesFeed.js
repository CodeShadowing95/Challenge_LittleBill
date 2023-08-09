import { useLocation } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import { Navbar } from '.'

import { AssignmentIcon } from '../utils/constants'
import SalesList from '../components/SalesList'

const SalesFeed = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nom = searchParams.get('nom');
  const prenom = searchParams.get('prenom');

  return (
    <Stack direction="column" sx={{ flex: "1" }}>
      <Navbar />

      {/* Content header */}
      <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{ padding: "2rem 4rem" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "3rem", height: "3rem", marginRight: "10px", borderRadius: "10px", backgroundImage: 'linear-gradient(0deg, #228be6 5%, #3bc9db 95%)'}}>
          <AssignmentIcon />
        </Box>
        <Typography sx={{ fontSize: "25px", fontWeight: 700, textAlign: "center" }}>Récapitulatif des ventes pour le client "{prenom} {nom}"</Typography>
      </Stack>

      {/* Content body */}
      <Box sx={{ height: "30rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 4rem" }}>
        <SalesList nom={nom} prenom={prenom} />
      </Box>
    </Stack>
  )
}

export default SalesFeed