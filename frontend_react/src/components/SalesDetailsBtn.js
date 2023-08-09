import { Stack } from "@mui/material";
import { AssignmentIcon } from "../utils/constants";
import { Link } from "react-router-dom";

const SalesDetailsBtn = ({ nom, prenom }) => {
  return (
    <Stack
      component={Link}
      to={`/sales/?nom=${nom}&prenom=${prenom}`}
      sx={{
        display: "flex",
        float: "right",
        justifyContent: "center",
        alignItems: "center",
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "5px",
        backgroundImage: "linear-gradient(0deg, #388e3c 5%, #38d9a9 95%)",
        "&:hover": {
          backgroundImage: 'linear-gradient(0deg, #38d9a9 5%, #388e3c 95%)',
        }
      }}
      key={`${nom}`}
    >
      <AssignmentIcon sx={{ fontSize: "25px", color: "#fff" }} />
    </Stack>
  );
};

export default SalesDetailsBtn;
