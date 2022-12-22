import { Box, Grid, styled, Tab, Tabs } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import TimelineComp from "../Timeline/TimelineComp";
import Projects from "./Projects";

function TabsComponent() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomTab = styled(Tab)(({ theme }) => ({
    color: "rgba(232,232,233, 0.4)",
    fontWeight: 400,
    textTransform: "capitalize",
  }));

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "rgba(232,232,233, 0.1)" }}>
            <TabList
              variant="scrollable"
              scrollButtons="auto"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <CustomTab label="Projects" value="1" />
              <CustomTab label="Arsenals" value="2" />
              <CustomTab label="Timeline" value="3" />
              <CustomTab label="Resume" value="4" />
              <CustomTab label="Contact" value="5" />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{ width: "100%", background: "", padding: 0, margin: 0 }}
          >
            <Grid container>
              <Projects />
            </Grid>
          </TabPanel>
          <TabPanel
            value="2"
            sx={{ width: "100%", background: "", padding: 0, margin: 0 }}
          >
            <Grid container>
              <Skills />
            </Grid>
          </TabPanel>
          <TabPanel
            value="3"
            sx={{ width: "100%", background: "", padding: 0, margin: 0 }}
          >
            <Grid container>
              <TimelineComp />
            </Grid>
          </TabPanel>
          <TabPanel
            value="3"
            sx={{ width: "100%", background: "", padding: 0, margin: 0 }}
          >
            <Grid container>
              {/* <Project /> */}
              {/* <Project /> */}
              {/* <Project /> */}
              {/* <Project /> */}
            </Grid>
          </TabPanel>
          <TabPanel
            value="4"
            sx={{ width: "100%", background: "", padding: 0, margin: 0 }}
          >
            <Grid container>
              <Resume />
            </Grid>
          </TabPanel>
          <TabPanel
            value="5"
            sx={{ width: "100%", background: "", padding: 0, margin: 0 }}
          >
            <Grid container>
              <Contact />
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default TabsComponent;
