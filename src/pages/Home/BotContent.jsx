import { Box, Typography } from "@mui/material";
import React from "react";
import featureLight from "../../assets/featureLight.png";
import { tokens } from "../../theme";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useTheme } from "@emotion/react";
import { ChatBubbleOutline } from "@mui/icons-material";
export default function BotContent({ data }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to top, ${
          data.isAddToHomePage ? "#2F1F05" : "black"
        }, transparent 50%), url(${data.avatar})`,
        height: "400px",
        backgroundColor: "transparent",
        backgroundPosition: "center center",
        width: "calc(20% - 1rem)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        transition: "background-color 1s ease",
        flexDirection: "column",
        borderRadius: "1rem",
        p: "1rem",
        justifyContent: "end",
        position: "relative",
        transition: "background .2s ease",
        backgroundBlendMode: "multiply",
        "&:hover": {
          backgroundColor: "rgba(0,0,0,.5)",
        },
        border: data.isAddToHomePage
          ? "3px solid #fcb43c"
          : "3px solid " + colors.redAccent[500],
      }}
    >
      {data.isAddToHomePage && (
        <img
          src={featureLight}
          style={{
            width: "1.5rem",
            position: "absolute",
            top: "-3.5%",
            right: "-2%",
          }}
        />
      )}
      <a
        target="_blank"
        style={{ color: "inherit", textDecoration: "none" }}
        href={`https://www.joyland.ai/chat?botId=${data.botId}`}
      >
        <Typography
          sx={{
            mb: "1rem",
            width: "100%",
            color: "white",
            "&:hover": {
              color: data.isAddToHomePage ? "#fcb43c" : colors.redAccent[500],
            },
          }}
          variant="h5"
        >
          {data.characterName}
        </Typography>
      </a>

      {/* icons */}
      <Box display="flex" justifyContent="space-between">
        <Box
          display="flex"
          color={colors.grey[600]}
          gap=".5rem"
          alignItems="center"
        >
          <FavoriteBorder />
          <Typography>{data.botLikes}</Typography>
        </Box>
        <Box
          display="flex"
          color={colors.grey[600]}
          gap=".5rem"
          alignItems="center"
        >
          <ChatBubbleOutline />
          <Typography>{data.botChats}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
