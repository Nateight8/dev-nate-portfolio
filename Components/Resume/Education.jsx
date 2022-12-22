import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

function Education() {
  return (
    <Box sx={{ color: "white" }} className="education">
      <Box
        sx={{
          width: "100%",
          background: "",
          paddingBlock: "1.5rem",
        }}
      >
        <Typography variant="h4" sx={{ paddingBottom: "0.5rem" }}>
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              sx={{
                ".MuiListItemText-secondary": {
                  color: "white",
                  opacity: 0.6,
                  fontWeight: 300,
                },
              }}
              primary="Federal university of technology"
              secondary="BTech in Project Management(2012 - 2017)"
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Education;
