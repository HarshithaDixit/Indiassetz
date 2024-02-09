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
            sx={{ width: 30, height: 50, marginTop: "49%", paddingRight:'100%'  }}
          />
        </IconButton>
      </div>

      <div className="search">
        <Container
          maxWidth="md"
          sx={{ mt: 1, marginRight: "70%"}}
        >
          <TextField
            id="search"
            type="search"
            label="search clients,Properties and service"
            sx={{ width: 400,margin:"15%"}}
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
      <div className="icons">
      <Button
        variant="outlined"
        sx={{margin:"27%", color:"black" }}
        startIcon={<AddCircleOutlineIcon />}
      >
        Add
      </Button>
      </div>
         <div className="text"> 
        <IconButton
          sx={{
            display: "flex",
              // margin: "10%",
            gap: "20%",
          justifyContent:"flex-end",
          position:"absolute",
          top:"0",
        
          
        }}>
          <TextSnippetIcon
            sx={{ width: 20, height: 70, marginTop:"63%" }}
          />

          <NotificationsIcon sx={{ width: 20, height: 70,marginTop:"63%" }} />
          <MoreVertIcon sx={{ width: 20, height: 70,marginTop:"63%" }} />
        </IconButton>
        
      </div>
      </div>
     
  );
};
export default Navbar;
