import React, { useEffect, useRef } from "react";
import Project from "../Projects/Project";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
    <div ref={projectRef}>
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export default Projects;
