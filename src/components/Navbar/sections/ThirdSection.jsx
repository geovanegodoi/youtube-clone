import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import NavbarSection from "../NavbarSection";

const sectionElements = [
    {
        icon: <HomeIcon />,
        text: "Opcao 1",
    },
    {
        icon: <HomeIcon />,
        text: "Opcao 2",
    },
    {
        icon: <HomeIcon />,
        text: "Opcao 3",
    },
];

const ThirdSection = () => <NavbarSection elements={sectionElements} />;

export default ThirdSection;
