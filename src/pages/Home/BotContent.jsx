import { Box } from "@mui/material";
import React from "react";

export default function BotContent({ data }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${data.avatar})`,
        height: "400px",
        backgroundPosition: "center center",
        width: "calc(20% - 1rem)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {data.characterName}
    </Box>
  );
}
