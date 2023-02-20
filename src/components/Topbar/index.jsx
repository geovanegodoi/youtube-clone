import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import {
  MenuIconButton,
  VideoIconButton,
  AppsIconButton,
  MoreIconButton,
  LoginButton,
} from "./BarIcons";

const Topbar = ({ toggleNavbar }) => {
  console.log(toggleNavbar);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{ display: "inline-flex", flexGrow: 1 }}
            onClick={() => toggleNavbar(true)}
          >
            <MenuIconButton />
          </Box>
          <VideoIconButton />
          <AppsIconButton />
          <MoreIconButton />
          <LoginButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topbar;
