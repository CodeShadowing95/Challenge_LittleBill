import {
  Box,
  Button,
  Grid,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate("/")
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        width: "100%",
        height: "100dvh",
        background:
          "linear-gradient(to right, #61045F, #AA076B)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          height: "40%",
          minWidth: "20%",
          marginTop: "50px",
          padding: "20px",
          border: "1px solid #fff",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, .7)"
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "50px", fontWeight: "700", color: "#2d2d2d" }}
        >
          Hiboutik
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            width: "100%",
          }}
          onSubmit={handleSubmit}
        >
          <TextField name="email" label="Adresse mail" type="email" fullWidth />
          <TextField name="password" label="Mot de passe" type="password" fullWidth />
          <Button type="submit" fullWidth variant="contained" color="primary" size="large" sx={{ marginTop: "30px" }} >
            Connexion
          </Button>
        </form>
      </Box>
    </Stack>
  );
};

export default Auth;
