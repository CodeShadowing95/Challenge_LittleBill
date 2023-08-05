import { useParams } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import { Navbar } from './'

import { SearchIcon } from '../utils/constants'
import SearchClients from './SearchClients'

const SocialMedia = () => {
  const { searchTerm } = useParams();
  

  return (
    <Stack direction="column" sx={{ flex: "1" }}>
      <Navbar />

      {/* Content header */}
      <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{ padding: "2rem 4rem" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "3rem", height: "3rem", marginRight: "10px", borderRadius: "10px", backgroundImage: 'linear-gradient(0deg, #228be6 5%, #3bc9db 95%)'}}>
          <SearchIcon />
        </Box>
        <Typography sx={{ fontSize: "25px", fontWeight: 700, textAlign: "center" }}>Résultats de recherche pour {`${searchTerm}`}</Typography>
      </Stack>

      {/* Content body */}
      <Box sx={{ height: "30rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 4rem" }}>
        <SearchClients />
      </Box>
    </Stack>
  )
}

export default SocialMedia