import React, { useEffect, useRef } from "react";
import Project from "../Projects/Project";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import data from "../data";
import { Grid } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      let Projects = gsap.utils.toArray(".project");

      Projects.forEach((project, index) => {
        gsap.set(project, { scale: 1, opacity: 1 });

        gsap.to(project, {
          opacity: 0,
          scale: 0.9,
          scrollTrigger: {
            trigger: project,
            // markers: true,
            scrub: 2,
            start: "top 20%",
            end: "bottom top",
            start: "bottom 70%",
          },
        });
      });
    }, projectRef);
    return () => ctx.revert();
  }, []);
  return (
    <Grid container sx={{ width: "100%", paddingY: "1rem" }}>
      {data.map(({ img, project, id, git, url }) => (
        <Project key={id} img={img} project={project} git={git} url={url} />
      ))}
    </Grid>
  );
}

export default Projects;
