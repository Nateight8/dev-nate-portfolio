import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Avatar, Typography, Box } from "@mui/material";
import React from "react";

function TimelineItemComp() {
  return (
    <TimelineItem>
      <TimelineSeparator>
        {/* <TimelineDot> */}
        <Avatar
          alt="Mbaocha"
          src="/static/images/avatar/1.jpg"
          sx={{
            // width: { xs: 56, sm: 72 },
            // height: { xs: 56, sm: 72 },
            background: "#222d3d",
            color: "#ffec10",
            border: "1px solid rgba(232,232,233, 0.1)",
            marginY: "0.8em",
          }}
        />
        {/* </TimelineDot> */}
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box
          sx={{
            // background: " #222d3d",
            width: "100%",
            color: "whitesmoke",
            paddingBottom: "2.24rem",
          }}
        >
          <Typography variant="h5">Mbaocha Jonathan</Typography>
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            Learning Gsap
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.6, fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            praesentium molestias neque nesciunt quia mollitia a aspernatur.
            Blanditiis minus voluptatem adipisci dolore aut quam debitis! Eos
            iste laborum recusandae! Quasi.
          </Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}

export default TimelineItemComp;
