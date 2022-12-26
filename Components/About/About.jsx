import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";

import SkillsAvatar from "./SkillsAvatar";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TabsComponent from "./TabsComponent";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Project from "../Projects/Project";

function About() {
  return (
    <section style={{ background: "#1d242e", width: "100%" }}>
      <Container
        sx={{
          background: "#1d242e",
          width: "100%",
          minHeight: "100vh",
          paddingY: "3rem",
          //   position: "fixed",
          //   inset: 0,
        }}
      >
        <Stack mb={2}>
          <Avatar
            alt="Mbaocha"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: { xs: 56, sm: 72 },
              height: { xs: 56, sm: 72 },
              background: "#222d3d",
              color: "#ffec10",
              border: "1px solid rgba(232,232,233, 0.1)",
              marginY: "0.8em",
            }}
          />
          <Typography variant="h5" sx={{ color: "rgba(232,232,233, 1)" }}>
            Mbaocha Jonathan
          </Typography>
        </Stack>
        <Grid container mb={2}>
          <Grid item xs={12} md={10}>
            <Box
              sx={{
                maxWidth: {
                  xs: "100%",
                  md: "35rem",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(232,232,233, 0.5)",
                  marginBottom: { xs: "1rem", sm: 0 },
                }}
              >
                I am a Front End Developer with a strong understanding of UI/UX
                Designs and a passion for building beautiful and functional web
                applications
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} mt={2}>
              <Button
                sx={{
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  fontWeight: 400,
                  color: "rgba(232,232,233, 0.5)",
                }}
                variant="text"
                startIcon={<PersonPinIcon />}
              >
                Lagos, Nigeria
              </Button>
              <Button
                sx={{
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  fontWeight: 400,
                  color: "rgba(232,232,233, 0.5)",
                }}
                variant="text"
                startIcon={<CalendarMonthIcon />}
              >
                Joined April 2020
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2} mt={2}>
            <Stack
              direction="row"
              justifyContent="end"
              alignItems="end"
              sx={{ width: "100%", background: "", height: "0100%" }}
            >
              <SkillsAvatar icon={<TwitterIcon />} />
              <SkillsAvatar
                link="https://github.com/Nateight8"
                icon={<GitHubIcon />}
              />
              <SkillsAvatar
                link="https://www.linkedin.com/in/mbaocha-jonathan-7463b7256"
                icon={<LinkedInIcon />}
              />
            </Stack>
          </Grid>
        </Grid>
        <TabsComponent />
        {/* <Divider sx={{ background: "rgba(232,232,233, 0.1)" }} /> */}
      </Container>
    </section>
  );
}

export default About;
