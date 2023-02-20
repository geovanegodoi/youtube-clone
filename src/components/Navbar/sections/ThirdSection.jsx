import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import NavbarSection from "../NavbarSection";

const sectionElements = [
  {
    icon: <HomeIcon />,
    text: "Inicio",
  },
  {
    icon: <HomeIcon />,
    text: "Inicio",
  },
  {
    icon: <HomeIcon />,
    text: "Inicio",
  },
];

const ThirdSection = () => <NavbarSection elements={sectionElements} />;

export default ThirdSection;
