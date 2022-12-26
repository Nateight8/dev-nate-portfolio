import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import SkillsAvatar from "../About/SkillsAvatar";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GifBoxRounded } from "@mui/icons-material";

function Footer() {
  return (
    <Container sx={{ height: "100%", background: "#222d3d", color: "white" }}>
      <Grid container>
        <Grid item xs={6} sm={4}>
          <Box sx={{ height: "100%", paddingBlock: "0.5rem", width: "100%" }}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                background: "",
                height: "100%",
                justifyContent: { xs: "center", sm: "start" },
              }}
            >
              <IconButton
                alt="LinkdIn"
                src="/static/images/avatar/1.jpg"
                sx={{
                  backgroundColor: "#0b85c9",
                  marginLeft: { sm: "1rem" },
                  marginRight: { xs: "1rem", sm: 0 },
                  background: "#222d3d",
                  color: "rgba(232,232,233, 0.5)",
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                alt="LinkdIn"
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
                alt="LinkdIn"
                src="/static/images/avatar/1.jpg"
                sx={{
                  backgroundColor: "#0b85c9",
                  marginLeft: { sm: "1rem" },
                  marginRight: { xs: "1rem", sm: 0 },
                  background: "#222d3d",
                  color: "rgba(232,232,233, 0.5)",
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Typography variant="body1" sx={{ opacity: 0.6 }} textAlign="right">
              Developed by Nate
            </Typography>
          </Stack>
        </Grid>
        <Grid item sm={4} sx={{ height: "", background: "", width: "100%" }}>
          <Divider my={2} />
          <Box sx={{ height: "100%", paddingBlock: "0.5rem", width: "100%" }}>
            <Typography
              xs={12}
              variant="body1"
              sx={{ opacity: 0.6, textAlign: { xs: "center", sm: "right" } }}
            >
              All Rights Reserved ©2022
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
