import React, { useState } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import BackspaceIcon from "@mui/icons-material/Backspace";
//import OutlinedInput from "@mui/material/OutlinedInput";
//import FormControl from "@mui/material/FormControl";
//import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

const Search = ({ searchText, setSearchText, handleSubmit }) => {
  return (
    <Box
      sx={{
        width: 700,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        label="Search News"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        id="fullWidth"
        margin="dense"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="backspace search text"
                onClick={() => setSearchText("")}
                edge="start"
              >
                <BackspaceIcon />
              </IconButton>
              <IconButton
                aria-label="enter search text"
                onClick={() => handleSubmit(searchText)}
                edge="end"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
