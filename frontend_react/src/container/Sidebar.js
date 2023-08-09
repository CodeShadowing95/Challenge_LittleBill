import { Avatar, Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { user, DashboardIcon, features } from '../utils/constants'
import MenuItem from '../components/MenuItem'

const Sidebar = () => (
  <Stack direction="column" sx={{
    top: 0,
    backgroundColor: "#03254c",
    minWidth: "250px",
    height: '100dvh',
    position: "sticky",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }}>
    {/* General Stack Top */}
    <Stack direction="column" spacing={10}>
      {/* Stack logo */}
      <Stack direction="column" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "1rem" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant='h1' sx={{ fontSize: "2rem", fontWeight: 700, letterSpacing: 3, color: "#fff" }}>HIBOUTIK</Typography>
        </Link>
      </Stack>
      {/* Stack fonctionnalités essentielles */}
      <Stack direction="column" spacing={5} alignItems="center" justifyContent="center">
        <Box sx={{ p: 2, display: 'flex', justifyContent: "center", alignItems: "center", columnGap: "10px" }}>
          <Avatar variant="rounded" src={user} sx={{ width: 40, height: 40 }} />
          <Stack spacing={0.5}>
            <Typography fontWeight={700} color="#fff">Geoffrey SAUTREAU</Typography>
            <Typography variant="body2" color="#afafaf">Utilisateur Premium</Typography>
          </Stack>
        </Box>

        <MenuItem icon={DashboardIcon} text='Dashboard' />
        {features.map((feature) => (
          <MenuItem icon={feature.icon} text={feature.name} key={feature.name} />
        ))}
      </Stack>
    </Stack>

    {/* <Typography variant='body2' sx={{ paddingBottom: "10px", fontSize: "12px", color: "#afafaf" }}>&copy;Tous droits réservés 2023.</Typography> */}
    {/* Stack sous-fonctionnalités */}
    {/* <Stack direction="column" spacing={1.5} sx={{ paddingBottom: "10px" }}>
      <MenuItem icon={HelpIcon} text='Aide' />
      <MenuItem icon={InfoIcon} text='À propos' /> */}
      {/* <MenuItem icon={SettingsApplicationsIcon} text='Paramètres' /> */}
    {/* </Stack> */}
  </Stack>
)

export default Sidebar