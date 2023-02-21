import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FirstSection, SecondSection, ThirdSection } from "./sections";
import { MenuIconButton } from "../Topbar/BarIcons";

const Navbar = ({ state, toggleNavbar }) => {
    return (
        <React.Fragment>
            <Drawer
                anchor="left"
                open={state}
                onClose={() => toggleNavbar(false)}
            >
                <Box
                    onClick={() => toggleNavbar(false)}
                    onKeyDown={() => toggleNavbar(false)}
                    sx={{ width: 240 }}
                >
                    <Box
                        sx={{
                            display: "inline-flex",
                            paddingTop: 1,
                            paddingLeft: 2,
                        }}
                    >
                        <MenuIconButton />
                    </Box>
                    <FirstSection />
                    <SecondSection />
                    <ThirdSection />
                </Box>
            </Drawer>
        </React.Fragment>
    );
};

export default Navbar;
