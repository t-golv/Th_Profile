import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import React, { useContext } from "react";
import { tokens } from "../../theme";
import GlobalContext from "../../context/GlobalContext";
import BotContent from "./BotContent";

export default function PublicBots() {
  const { dataPublicBots, sortedBots } = useContext(GlobalContext);
  const theme = useTheme();
  if (dataPublicBots?.result) {
    console.log(sortedBots(dataPublicBots.result));
  }
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ backgroundColor: colors.blueAccent[500] + "22" }}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {dataPublicBots &&
          dataPublicBots?.result &&
          sortedBots([...dataPublicBots.result])?.map((bot) => (
            <BotContent key={bot.botId} data={bot} />
          ))}
      </Container>
    </Box>
  );
}
