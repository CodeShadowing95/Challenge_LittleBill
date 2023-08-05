import { Box, Stack, Typography } from '@mui/material'

const Template = ({ text, value, icon, bgImage }) => {
  const Icon = icon

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1.5}
      sx={{
        color: "#000",
        textDecoration: "none",
        width: "20rem",
        height: "8rem",
        borderRadius: "10px",
        transition: "0.2s",
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: 3,
        position: "relative",
        padding: "2rem 2rem",
        "&:hover" : {
          // backgroundColor: `${color}`,
          boxShadow: 5
        }
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: 2}}
      >
        <Typography variant="body2" sx={{ fontSize: "20px", fontWeight: "400", color: "#e6e6e6" }}>{text}</Typography>
        <Typography sx={{ fontSize: "40px", fontWeight: "600", color: "#e6e6e6" }} >{value}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "end" }}>
        <Icon sx={{ fontSize: "100px" }} />
      </Box>
    </Stack>
  )
}

export default Template