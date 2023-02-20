import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle, Apps, VideoCall, MoreVert } from "@mui/icons-material";
import Button from "@mui/material/Button";
import YouTubeLogo from "../../assets/youtube.svg";
import React from "react";

export const MenuIconButton = ({ toggleNavbar }) => (
  <React.Fragment>
    <IconButton size="large" edge="start" color="inherit" aria-label="menu">
      <MenuIcon sx={{ marginRight: 1 }} />
    </IconButton>
    <img src={YouTubeLogo} style={{ width: 90 }} />
  </React.Fragment>
);

export const VideoIconButton = () => (
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
    sx={{ mr: 2 }}
  >
    <VideoCall />
  </IconButton>
);

export const AppsIconButton = () => (
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
    sx={{ mr: 2 }}
  >
    <Apps />
  </IconButton>
);

export const MoreIconButton = () => (
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
    sx={{ mr: 2 }}
  >
    <MoreVert />
  </IconButton>
);

export const LoginButton = () => (
  <Button startIcon={<AccountCircle />} variant="outlined" color="primary">
    Fazer Login
  </Button>
);
