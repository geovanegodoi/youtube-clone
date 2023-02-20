import React from "react";
import NavbarSection from "../NavbarSection";
import { VideoLibrary, History, WatchLater } from "@mui/icons-material";

const sectionElements = [
  {
    icon: <VideoLibrary />,
    text: "Biblioteca",
  },
  {
    icon: <History />,
    text: "Histórico",
  },
  {
    icon: <WatchLater />,
    text: "Assistir depois",
  },
];

const SecondSection = () => <NavbarSection elements={sectionElements} />;

export default SecondSection;
