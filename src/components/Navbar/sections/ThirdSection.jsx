import React from "react";
import {
    Headphones,
    SportsFootball,
    SportsEsports,
    LocalMovies,
    Newspaper,
} from "@mui/icons-material";
import NavbarSection from "../NavbarSection";

const sectionElements = [
    {
        icon: <Headphones />,
        text: "Music",
    },
    {
        icon: <SportsFootball />,
        text: "Sports",
    },
    {
        icon: <SportsEsports />,
        text: "Games",
    },
    {
        icon: <LocalMovies />,
        text: "Movies",
    },
    {
        icon: <Newspaper />,
        text: "News",
    },
];

const ThirdSection = () => <NavbarSection elements={sectionElements} />;

export default ThirdSection;
