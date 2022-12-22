import { Box, Grid, List, ListItemText, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Contact from "./Contact";
import Education from "./Education";
import ExperienceComp from "./ExperienceComp";
import Skills from "./Skills";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Resume() {
  const resumeRef = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".heading", { opacity: 0 });
      gsap.set(".job", { xPercent: -200 });
      gsap.set(".contact", { xPercent: 200 });
      gsap.set(".education", { xPercent: 200 });
      gsap.set(".phone", { opacity: 0 });
      gsap.set(".email", { opacity: 0 });
      gsap.set(".person", { opacity: 0 });
      gsap.set(".profile", { xPercent: -200, opacity: 0 });
      gsap.set(".pbody", { xPercent: -200, opacity: 0 });
      gsap.set(".experience", { opacity: 0, xPercent: -200 });
      gsap.set(".first", { opacity: 0 });
      gsap.set(".firstpara-first", { opacity: 0 });
      gsap.set(".firstpara-second", { opacity: 0 });
      gsap.set(".second", { opacity: 0 });
      gsap.set(".third", { opacity: 0 });
      gsap.set(".skill", { opacity: 0 });

      let tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".heading",
            start: "top center",
            // markers: true,
          },
        })
        .to(".heading", { opacity: 1, duration: 1.5 })
        .to(".job", { xPercent: 0, duration: 1 })
        .to(".profile", { xPercent: 0, opacity: 1, duration: 1 })
        .to(".contact", {
          xPercent: 0,
          duration: 1,
        })
        .to(".pbody", {
          xPercent: 0,
          opacity: 1,
          duration: 1,
        })
        .to(".phone", { opacity: 1 })
        .to(".email", { opacity: 1 })
        .to(".person", { opacity: 1 })
        .to(".experience", { opacity: 0.01, xPercent: 0 })
        .to(".pbody", {
          xPercent: 0,
          opacity: 0.6,
          duration: 1,
        })
        .to(".experience", { opacity: 1, duration: 2 })
        .to(".first", { opacity: 1, duration: 2 })
        .to(".firstpara-first", {
          xPercent: 0,
          opacity: 1,
          duration: 1,
        })
        .to(".education", {
          xPercent: 0,
          duration: 1,
        })
        .to(".firstpara-first", {
          xPercent: 0,
          opacity: 0.6,
          duration: 1,
        })
        .to(".firstpara-second", {
          xPercent: 0,
          opacity: 0.6,
          duration: 1,
        })
        .to(".skill", { opacity: 1, duration: 2 })
        .to(".second", { opacity: 1, duration: 2 })
        .to(".third", { opacity: 1, duration: 2 });
    }, resumeRef);
    return () => ctx.revert();
  }, []);

  return (
    <Grid
      className=""
      ref={resumeRef}
      item
      xs={12}
      sx={{ marginY: "3rem", minHeight: "100vh" }}
    >
      <div>
        <Box
          className="heading"
          sx={{
            position: "relative",
            color: "white",
            paddingBlock: "2.5rem",
          }}
        >
          <Typography variant="h1" fontSize={72}>
            Mbaocha Jonathan
          </Typography>

          <Typography className="job" variant="h6" fontWeight={300}>
            Frontend Developer
          </Typography>
        </Box>
        <Grid container>
          <Grid
            item
            xs={8}
            sx={{ minHeight: "100vh", color: "white", padding: "1.2em" }}
          >
            <Box
              className="profile"
              sx={{
                width: "100%",
                background: "",
                paddingBlock: "1.5rem",
                opacity: 0,
              }}
            >
              <Typography variant="h4" sx={{ paddingBottom: "0.5rem" }}>
                Profile
              </Typography>
              <Typography
                variant="body1"
                className="pbody"
                sx={{ opacity: 0.6, fontWeight: 300 }}
              >
                As a front-end developer, I have a passion for creating visually
                appealing and user-friendly websites and web applications. I
                have a strong foundation in HTML, CSS, and JavaScript, and I am
                always looking to improve my skills and stay up-to-date with the
                latest technologies and best practices in web development.
              </Typography>
            </Box>
            <Box className="experiences">
              <ExperienceComp />
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ padding: "1.2em" }}>
            <Contact />
            <Education />
            <Skills />
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}

export default Resume;
