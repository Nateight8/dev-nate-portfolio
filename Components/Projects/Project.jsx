import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

function Project({ dataBg, dataTxt }) {
  return (
    <Grid
      className="project"
      data-bgcolor={dataBg}
      data-text={dataTxt}
      item
      xs={12}
      sx={{ marginY: "1rem" }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ paddingBlock: "1rem", marginY: "1rem" }}
      >
        <Box
          sx={{
            height: "20rem",
            background: "#222d3d",
            width: "100%",
          }}
        >
          pics
        </Box>
        <Box sx={{ color: "white", marginY: "1rem" }}>
          <Typography variant="h3" sx={{ marginY: "0.5rem", fontSize: "32px" }}>
            Weather App
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.5, fontWeight: 400 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            quisquam repellendus esse maxime optio, tempora laudantium maiores
            molestias quis expedita, accusantium porro quibusdam architecto iure
            obcaecati, incidunt laboriosam molestiae suscipit.
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
}

export default Project;
