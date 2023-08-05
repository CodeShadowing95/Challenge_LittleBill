import { useState } from 'react';
import { Box, TextField } from '@mui/material'
import { SearchIcon } from '../utils/constants'
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      navigate(`/search/${encodeURIComponent(searchTerm)}`);

      setSearchTerm('');
    }
  }

  return (
    <Box component="form" sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }} onSubmit={handleSubmit}>
      <Box sx={{
        padding: "10px 10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#187bcd",
        color: "#FFF",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "0.2s",
        // "&:hover": {
        //   backgroundColor: "#7D7D7D",
        //   color: "#FFF",
        // }
      }}
      >
        <SearchIcon fontSize="medium" />
      </Box>

      <TextField placeholder='Rechercher un client' fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          width: "100%",
          color: "#fff",
          "& .MuiOutlinedInput-root": {
            height: "3rem",
            fontSize: "20px",
            "& fieldset": {
              border: 'none'
            }
          }
        }}
        InputProps={{
          style: {
            color: "#fff"
          }
        }}
      />
    </Box>
  )
}

export default Searchbar