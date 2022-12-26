import { Avatar, Box, IconButton } from "@mui/material";
import React from "react";

function SkillsAvatar({ icon, link }) {
  return (
    <IconButton
      href={link}
      alt="LinkdIn"
      src="/static/images/avatar/1.jpg"
      sx={{
        backgroundColor: "#0b85c9",
        marginLeft: { sm: "1rem" },
        marginRight: { xs: "1rem", sm: 0 },
        background: "#222d3d",
        color: "rgba(232,232,233, 0.5)",
        border: "1px solid rgba(232,232,233, 0.1)",
      }}
    >
      {icon}
    </IconButton>
  );
}

export default SkillsAvatar;
