import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import PersonPinIcon from "@mui/icons-material/PersonPin";

function Contact() {
  return (
    <Box className="contact" sx={{ color: "white" }}>
      <Box
        sx={{
          width: "100%",
          background: "",
          paddingBlock: "1.5rem",
        }}
      >
        <Typography variant="h4" sx={{ paddingBottom: "0.5rem" }}>
          Contact
        </Typography>
        <List>
          <ListItem className="phone">
            <ListItemIcon>
              <PhoneAndroidIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary="+234 7037991066"
              //   secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem className="email">
            <ListItemIcon>
              <EmailIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary="mbaochajonathan@yahoo.com"
              //   secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem className="person">
            <ListItemIcon>
              <PersonPinIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary="Lagos, Nigeria"
              //   secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Contact;
