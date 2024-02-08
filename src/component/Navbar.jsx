import React from "react";
import "./Navbar.css";
import {
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src="man.svg" alt="" srcset="" />
        <p>
          partner code:IA23
          <br></br>
          referral code:IA45
        </p>
      </div>
      <div className="arrow">
        <IconButton>
          <ArrowCircleLeftIcon
            sx={{ width: 50, height: 70, marginTop: "40%" }}
          />
        </IconButton>
      </div>

      <div className="search">
        <Container
          maxWidth="md"
          sx={{ mt: 1, marginRight: "50%", padding: "0%" }}
        >
          <TextField
            id="search"
            type="search"
            label="search clients,Properties and service"
            sx={{ width: 500 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </div>

      <Button
        variant="outlined"
        sx={{ margin: "3%" }}
        startIcon={<AddCircleOutlineIcon />}
      >
        Add
      </Button>
      <div className="icons">
        <IconButton
          sx={{
            display: "flex",
            margin: "20%",
            paddingLeft: "100%",
            gap: "20%",
            justifyContent: "flex-start",
          }}
        >
          <TextSnippetIcon
            sx={{ width: 50, height: 70, marginTop: "15%", paddingLeft: "60%" }}
          />
          <br></br>
          <br></br>

          <NotificationsIcon sx={{ width: 50, height: 70, marginTop: "20%" }} />
          <MoreVertIcon sx={{ width: 50, height: 70, marginTop: "20%" }} />
        </IconButton>
      </div>
    </div>
  );
};
export default Navbar;
