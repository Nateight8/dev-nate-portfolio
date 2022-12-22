import {
  Box,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Skill from "./Skill";

function Skills() {
  const listStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "0.8em",
    display: "list-item",
    ".MuiListItemText-secondary": {
      color: "white",
      fontWeight: 300,
    },
  };
  return (
    <Box className="skill" sx={{ color: "white" }}>
      <Box
        sx={{
          width: "100%",
          background: "",
          paddingBlock: "1.5rem",
        }}
      >
        <Typography variant="h4" sx={{ paddingBottom: "0.5rem" }}>
          Skills
        </Typography>

        <Stack>
          <Skill skill="Html 5" value={70} />
          <Skill skill="CSS 3" value={60} />
          <Skill skill="Javascript" value={60} />
          <Skill skill="React js" value={70} />
        </Stack>
      </Box>
      <Box sx={{ marginY: "1rem" }}>
        <ListItemText primary="Javascript Framework" />
        <List
          sx={{
            listStyleType: "disc",
            opacity: 0.6,
            paddingLeft: "1rem",
          }}
        >
          <ListItemText
            sx={{ ...listStyle }}
            primary="React JS"
            secondary="Intermediate"
          />
        </List>
      </Box>
      <Grid container sx={{ width: "100%", background: "" }}>
        <Grid item xs={6}>
          <Box>
            <ListItemText primary="CSS Framework" />
            <List
              sx={{
                listStyleType: "disc",
                opacity: 0.6,
                paddingLeft: "1rem",
              }}
            >
              <ListItemText
                sx={{ ...listStyle }}
                primary="Tailwind css"
                secondary="Pro"
              />
              <ListItemText
                sx={{ ...listStyle }}
                primary="Material UI"
                secondary="Intermediate"
              />
              <ListItemText
                sx={{ ...listStyle }}
                primary="Boostrap"
                secondary="Pro"
              />
            </List>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <ListItemText primary="Libraries" />
            <List
              sx={{
                listStyleType: "disc",
                opacity: 0.6,
                paddingLeft: "1rem",
              }}
            >
              <ListItemText
                sx={{ ...listStyle }}
                primary="Gsap Animation"
                secondary="beginer"
              />
              <ListItemText
                sx={{ ...listStyle }}
                primary="Formik"
                secondary="Pro"
              />
              <ListItemText
                sx={{ ...listStyle }}
                primary="Frammer motion"
                secondary="Pro"
              />

              <ListItemText
                sx={{ ...listStyle }}
                primary="Redux"
                secondary="Intermediate"
              />
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;
