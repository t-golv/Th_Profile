import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { tokens } from "../../theme";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Icon from "../../assets/discord.svg"; // Importing SVG as a component

export default function header() {
  const { result } = useContext(GlobalContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      {/* Cover */}
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${result.headImg})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height: "450px",
          maxWidth: "1928px",
          margin: "0 auto",
        }}
      ></Box>
      <Box>
        <Box
          sx={{
            margin: "0 auto",
            maxWidth: "1500px",
            p: "1rem 0 5rem 18rem",
            position: "relative",
          }}
          flexDirection="column"
        >
          <img
            className="unselectable"
            src={result.avatar}
            style={{
              width: "16rem",
              position: "absolute",
              top: "calc(-50% - 2.5rem)",
              left: "0",
              borderRadius: "50%",
              padding: ".3rem",
              border: `0px solid transparent`,
              background: `linear-gradient(to top, ${colors.redAccent[500]} 0%, ${colors.blueAccent[500]} 100%) no-repeat `,
              backgroundSize: "100% 100%",
              backgroundPosition: "-5% -5%",
              backgroundClip: "border-box",
              boxSizing: "border-box",
            }}
          />
          <Box
            justifyContent="space-between"
            display="flex"
            flexDirection="row"
          >
            <Typography variant="h1" component="h3">
              {result.name}
            </Typography>
            <Box display="flex" gap={2}>
              <a
                href="https://discord.com/users/1126684688564621332"
                target="_blank"
              >
                <img src={Icon} className="unselectable" />
              </a>
              <a
                href="https://www.joyland.ai/profile?userId=8Ad2r"
                target="_blank"
              >
                <Button
                  sx={{
                    p: "1rem 2rem",
                    borderRadius: "1rem",
                    background: "#fff",
                    "&:hover": {
                      background: `${colors.redAccent[500]}ff`,
                      color: "white",
                    },
                    "&:active": {
                      background: `${colors.blueAccent[500]}ff`,
                      color: "white",
                    },
                  }}
                  variant="outlined"
                  endIcon={<ExitToAppIcon />}
                >
                  <Typography sx={{}} variant="h4">
                    GO TO JOYLAND
                  </Typography>
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      transform: "scaleX(1.02) scaleY(1.1)",
                      bottom: 0,
                      borderRadius: "1rem",
                      background: `linear-gradient(to top, ${colors.redAccent[500]} 0%, ${colors.blueAccent[500]} 100%)`,
                      zIndex: -1, // Behind the text
                      filter: "blur(1px)", // Optional: blur the border for a smoother effect
                    }}
                  />
                </Button>
              </a>
            </Box>
          </Box>
          <Typography variant="h4" component="h3">
            {result.bio}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
