import React from "react";
import { Box, Grid, List, ListItemText, Typography } from "@mui/material";

function ExperienceComp() {
  const listStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "0.8em",
    ".MuiListItemText-secondary": {
      color: "white",
    },
  };
  return (
    <div className=" ">
      <Typography
        className="experience "
        variant="h4"
        sx={{ paddingBottom: "0.5rem" }}
      >
        Experience
      </Typography>
      <Box className="first" sx={{ marginY: "2rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 400 }}>
          React Frontend Developer
        </Typography>
        <ListItemText
          sx={listStyle}
          primary="Freelance"
          secondary="December 2021 - Present"
        />
        <Typography
          className="firstpara-first"
          variant="body1"
          sx={{ opacity: 0.6, fontWeight: 300 }}
        >
          Building and maintaining web applications using the React.
          Implementing user interfaces, as well as creating reusable components
          and integrating with APIs and back-end services.
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            opacity: 0.6,
            paddingLeft: "1rem",
          }}
          className="firstpara-second"
        >
          <ListItemText sx={{ display: "list-item", fontWeight: 300 }}>
            Implementing user interfaces using React and related technologies,
            such as Redux, Formik, Material Ui, Tailwind css etc
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            Integrating with APIs and back-end services to retrieve and
            manipulate data
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            Collaborating with cross-functional teams, such as designers,
            product managers, and other developers, to understand project goals
            and user needs
          </ListItemText>
        </List>
      </Box>
      {/* third */}
      <Box className="second " sx={{ marginY: "2rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 400 }}>
          User Interface Designer
        </Typography>
        <ListItemText
          sx={listStyle}
          primary="Light-up Softwares Ltd"
          secondary="August 2021 - Present"
        />
        <Typography variant="body1" sx={{ opacity: 0.6, fontWeight: 300 }}>
          Designing and creating the look and feel of a digital product, such as
          a website or software application. The UI designer's primary goal is
          to create a user-friendly and visually appealing interface that allows
          users to easily navigate and interact with the product.
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            opacity: 0.6,
            paddingLeft: "1rem",
          }}
        >
          <ListItemText sx={{ display: "list-item", fontWeight: 300 }}>
            Collaborating with cross-functional teams, such as product managers,
            developers, and content strategists, to understand project goals and
            user needs
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            Creating wireframes, mockups, and high-fidelity prototypes using
            design tools such as Adobe XD or Figma
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            Conducting user testing to gather feedback and make iterative design
            improvements
          </ListItemText>
        </List>
      </Box>

      <Box className="third">
        <Typography variant="h6" sx={{ fontWeight: 400 }}>
          Project Assistant
        </Typography>
        <ListItemText
          sx={listStyle}
          primary="Fintech Access Derivatives and Inclusion Services"
          secondary="September 2018 - June 2019"
        />
        <Typography variant="body1" sx={{ opacity: 0.6, fontWeight: 300 }}>
          Collaborated with Senior Executives to complete complex projects
          within the set budget and time frame.
        </Typography>
      </Box>
    </div>
  );
}

export default ExperienceComp;
