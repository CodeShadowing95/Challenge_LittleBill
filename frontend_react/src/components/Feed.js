import { Stack, Box, Typography } from '@mui/material'
import { Navbar, Template } from './'

import { DashboardIcon, FactCheckIcon, HistoryIcon, ImportExportIcon, PersonIcon, SettingsIcon, StarIcon, bgImages } from '../utils/constants'

const Feed = () => {

  return (
    <Stack direction="column" sx={{ flex: 1 }}>
      <Navbar />

      <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{ padding: "2rem 4rem" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "3rem", height: "3rem", marginRight: "10px", borderRadius: "10px", backgroundImage: 'linear-gradient(0deg, #228be6 5%, #3bc9db 95%)'}}>
          <DashboardIcon />
        </Box>
        <Typography sx={{ fontSize: "25px", fontWeight: 700, textAlign: "center" }}>Dashboard</Typography>
      </Stack>

      <Box sx={{ display: "flex", flexWrap: "wrap", padding: "0 4rem", gap: "3rem" }}>
        <Template bgImage={bgImages[0]} icon={PersonIcon} text="Nombre de clients" value="2000" />
        <Template bgImage={bgImages[1]} icon={FactCheckIcon} text="Nombre de ventes" value="1841" />
        <Template bgImage={bgImages[2]} icon={StarIcon} text="Clients satisfaits" value="475" />
        <Template bgImage={bgImages[3]} icon={ImportExportIcon} text="Retours positifs" value="513" />
        <Template bgImage={bgImages[4]} icon={SettingsIcon} text="Demandes en traitement" value="28000" />
        <Template bgImage={bgImages[5]} icon={HistoryIcon} text="Coupons utilisés" value="107" />
      </Box>
    </Stack>
  )
}

export default Feed