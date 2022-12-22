import { Box, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import Skill from "./Skill";

function Skills() {
  const logos = [
    "/logo/adobe-xd-2.svg",
    "/logo/figma-1.svg",
    "/logo/html-1.svg",
    "/logo/css-3.svg",
    "/logo/react-2.svg",
    "/logo/nextjs-2.svg",
    "/logo/tailwind-css-2.svg",
    "/logo/material-ui-1.svg",
    "/logo/redux.svg",
    "/logo/framer-motion.svg",
  ];

  return (
    <Stack sx={{ width: "100%", background: "" }}>
      <Grid container sx={{ paddingBlock: "2.5rem" }}>
        {logos.map((logo) => (
          <Skill key={logo} logo={logo} />
        ))}
      </Grid>
    </Stack>
  );
}

export default Skills;
