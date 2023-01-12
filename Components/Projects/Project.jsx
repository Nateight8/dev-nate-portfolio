import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  ButtonGroup,
  Chip,
} from "@mui/material";
import Image from "next/image";
import React from "react";

function Project({ dataBg, dataTxt, img, project, description }) {
  const sides = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    background: "#222d3d",
    borderRadius: "0.5rem",
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      className="project"
      sx={{ paddingY: "0.5rem", paddingX: { sm: "0.5rem" } }}
    >
      <Box
        // mainContainer
        sx={{
          position: "Relative",
          height: "15rem",
          width: "100%",
        }}
      >
        <Box
          // card
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",

            transformStyle: "preserve-3d",
            transition: "all 0.5s ease-in",
            transitionDelay: "0.5s",
            "&:hover": {
              transform: "rotateY(-180deg)",
              transition: "all 0.5s ease-out",
            },
          }}
        >
          <Box
            // front
            sx={{
              ...sides,
            }}
          >
            <Box
              sx={{
                height: "15rem",
                width: "100%",
                position: "relative",

                padding: "0.5rem",
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
                  borderRadius: "0.2rem",
                }}
              />
            </Box>
          </Box>
          <Box
            // back
            sx={{
              ...sides,
              transform: "rotateY(180deg)",
              color: "white",
              padding: "1rem",
            }}
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ width: "100%", height: "100%" }}
            >
              <Typography variant="h5" sx={{ fontSize: "1.24rem" }}>
                {project}
              </Typography>

              <Box sx={{ paddingY: "0.8rem" }}>
                <ButtonGroup
                  variant="contained"
                  color="primary"
                  aria-label="options"
                >
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 300,
                      letterSpacing: 1.6,
                    }}
                  >
                    Git Repo
                  </Button>
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 300,
                      letterSpacing: 1.6,
                    }}
                  >
                    Visit site
                  </Button>
                </ButtonGroup>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default Project;
