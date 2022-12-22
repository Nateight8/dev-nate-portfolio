import { Timeline } from "@mui/lab";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SkillsAvatar from "../About/SkillsAvatar";
import TimelineItemComp from "./TimelineItemComp";

function TimelineComp() {
  return (
    <Grid item xs={12} sx={{ marginY: "3rem" }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100vh" }}
      >
        <Typography className="header" variant="h1" sx={{ color: "white" }}>
          Coming soon...
        </Typography>
      </Stack>
    </Grid>
  );
}

export default TimelineComp;
