import { Box, LinearProgress, ListItemText, Typography } from "@mui/material";
import React from "react";

function Skill({ skill, value }) {
  return (
    <Box mt={3}>
      <ListItemText primary={skill} />
      <LinearProgress variant="determinate" value={value} />
    </Box>
  );
}

export default Skill;
