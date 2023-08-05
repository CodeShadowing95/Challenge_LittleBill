import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";

import IconToggle from "./IconToggle";
import {
  KeyboardArrowDownIcon,
  user,
  EmailIcon,
  NotificationsIcon,
  MenuIcon,
  HelpIcon,
} from "../utils/constants";
import Searchbar from "./Searchbar";

const Navbar = () => (
  <Stack
    direction="row"
    spacing={6}
    sx={{
      backgroundColor: "#187bcd",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "5rem",
      padding: "0 30px 0 30px",
    }}
  >
    <Box>
      <Searchbar />
    </Box>
    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", gap: 7 }}>
      <Box
        sx={{ display: "flex", alignItems: "center", cursor: "pointer", gap: 1 }}
      >
        <Avatar variant="circular" src={user} sx={{ width: 40, height: 40 }} />
        <Typography variant="body1" sx={{ color: "#fff", fontSize: "20px" }}>
          Geoffrey
        </Typography>
        <KeyboardArrowDownIcon
          sx={{ fontSize: 30, color: "#fff" }}
        />
      </Box>
      <IconToggle />
      <Badge color="error" variant="dot" badgeContent=" ">
        <EmailIcon sx={{ fontSize: 30, color: '#fff', cursor: 'pointer' }} color="action" />
      </Badge>
      <Badge color="error" variant="dot" badgeContent=" ">
        <NotificationsIcon sx={{ fontSize: 30, color: '#fff', cursor: 'pointer' }} />
      </Badge>
      <HelpIcon sx={{ fontSize: 30, color: '#fff', cursor: 'pointer' }} />
    </Stack>
  </Stack>
);

export default Navbar;
