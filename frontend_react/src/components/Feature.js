import { useParams } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import { Navbar } from '.'

import { NoData, features } from '../utils/constants'
import ClientsList from './ClientsList'

const Feature = () => {
  const { id } = useParams();
  const feature = features.find((item) => item.name.trim().toLowerCase() === id);
  const Icon = feature.icon

  return (
    <Stack direction="column" sx={{ flex: "1" }}>
      <Navbar />

      {/* Content header */}
      <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{ padding: "2rem 4rem" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "3rem", height: "3rem", marginRight: "10px", borderRadius: "10px", backgroundImage: 'linear-gradient(0deg, #228be6 5%, #3bc9db 95%)'}}>
          <Icon />
        </Box>
        <Typography sx={{ fontSize: "25px", fontWeight: 700, textAlign: "center" }}>{feature.name}</Typography>
      </Stack>

      {/* Content body */}
      <Box sx={{ height: "30rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 4rem" }}>
        {id === "clients" && <ClientsList />}
        {id !== "clients" &&
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", rowGap: 1, border: "2px dashed #d2d2d2", borderRadius: "5px", backgroundColor: "#f0f0f0", height: "20rem", width: "65rem" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "8rem", height: "8rem" }}>
              <img src={NoData} alt="No_data" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
            <Typography sx={{ fontSize: "30px", color: "#6e6e6e", fontWeight: 500 }}>Aucune donnée à afficher pour le moment...</Typography>
            <Typography variant="body2" sx={{ color: "#a0a0a0", fontSize: "15px" }}>Sélectionnez les filtres pour les données et démarrez la recherche</Typography>
          </Box>
        }
      </Box>
    </Stack>
  )
}

export default Feature