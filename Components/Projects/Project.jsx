import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project({ dataBg, dataTxt, img, project, description }) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={4}
      className="project"
      // data-bgcolor={dataBg}
      // data-text={dataTxt}
      sx={{ padding: "1rem", marginY: "2rem" }}
    >
      <Stack
        justifyContent="center"
        // alignItems="center"
        // sx={{ paddingBlock: "1rem", }}
      >
        <Box
          sx={{
            height: "15rem",
            width: "100%",
            position: "relative",
          }}
        >
          <Image
            src={img}
            alt={project}
            fill
            priority="high"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ color: "white", paddingY: "1rem" }}>
            <Typography variant="h3" sx={{ fontSize: "18px" }}>
              {project}
            </Typography>
            <Typography variant="body" sx={{ opacity: 0.6, fontWeight: 300 }}>
              Web Dev
            </Typography>
          </Box>
          <Box>
            <IconButton
              alt="Github"
              src="/static/images/avatar/1.jpg"
              sx={{
                backgroundColor: "#0b85c9",
                marginLeft: { sm: "1rem" },
                marginRight: { xs: "1rem", sm: 0 },
                background: "#222d3d",
                color: "rgba(232,232,233, 0.5)",
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              alt="Github"
              src="/static/images/avatar/1.jpg"
              sx={{
                backgroundColor: "#0b85c9",
                // marginLeft: { sm: "1rem" },
                // marginRight: { xs: "1rem", sm: 0 },
                background: "#222d3d",
                color: "rgba(232,232,233, 0.5)",
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Stack>
      </Stack>
    </Grid>
  );
}

export default Project;
