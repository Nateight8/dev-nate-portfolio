import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <section>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100vh", background: "#1d242f" }}
      >
        <Typography variant="h1" textAlign="center">
          Hello World, I'm Nate
        </Typography>
        <Container>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ fontSize: "18px" }}
          >
            a skilled frontend developer with a passion for building beautiful
            and functional web applications
          </Typography>
        </Container>
      </Stack>
    </section>
  );
}

export default Hero;
