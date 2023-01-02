import { Box, Grid, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";

function Skill({ logo }) {
  return (
    <Grid item xs={12} sm={4} md={3} lg={2} sx={{ padding: "0.5rem" }}>
      <Paper
        sx={{
          width: "100%",
          height: "10rem",
          background: "#222d3d",
          padding: "1.5rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Image src={logo} alt={logo} fill />
        </Box>
      </Paper>
    </Grid>
  );
}

export default Skill;
