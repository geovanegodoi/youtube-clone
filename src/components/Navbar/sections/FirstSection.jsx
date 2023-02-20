import React from "react";
import NavbarSection from "../NavbarSection";
import { Home, Whatshot, Subscriptions } from "@mui/icons-material";

const sectionElements = [
  {
    icon: <Home />,
    text: "Inicio",
  },
  {
    icon: <Whatshot />,
    text: "Em alta",
  },
  {
    icon: <Home />,
    text: "Inscrições",
  },
];

const FirstSection = () => <NavbarSection elements={sectionElements} />;

export default FirstSection;
