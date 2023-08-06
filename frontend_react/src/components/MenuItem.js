import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const MenuItem = ({ icon, text }) => {
  const Icon = icon;
  const id = text.trim().toLowerCase();

  const browse = (id) => {
    if(id !== 'dashboard'){
      if(id === 'clients'){
        return `/feature/${id}?page=1`
      }
      return `/feature/${id}`
    } else {
      return "/"
    }
  }

  return(
    <Stack direction="row" spacing={1} width={200} component={Link} to={browse(id)} key={`${id}`}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textDecoration: "none",
        "&:hover": {
          "& > *": {
            color: "#fff"
          },
        },
        cursor: "pointer"
      }}>
      <Typography variant='body1' sx={{ fontSize: 15, fontWeight: 500, color: '#c3c3c3', textAlign: 'center' }}>{text}</Typography>
      <Icon sx={{ fontSize: 30, color: '#c3c3c3' }} />
    </Stack>
  )
}

export default MenuItem