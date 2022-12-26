import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Project({ dataBg, dataTxt, img, project }) {
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
            width: "100%",
            position: "relative",
          }}
        >
          <Image
            src={img}
            alt=""
            fill
            priority="high"
            style={{
              objectFit: "contain",
              objectPosition: "center top",
            }}
          />
        </Box>
        <Box sx={{ color: "white", marginY: "1rem" }}>
          <Typography variant="h3" sx={{ marginY: "0.5rem", fontSize: "32px" }}>
            {project}
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
