import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { tokens } from "../../theme";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Icon from "../../assets/discord.svg"; // Importing SVG as a component
import defaultImg from "../../assets/cover.jpeg";

export default function header() {
  const { dataProfile, sumLikes } = useContext(GlobalContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const formatLikes = (likes) => {
    if (likes >= 1000) {
      return (likes / 1000).toFixed(2) + "k"; // Format as "1.84k"
    }
    return likes.toString(); // Return as is if less than 1000
  };
  return (
    <Box>
      {/* Cover */}
      <Box
        sx={{
          backgroundImage: `url(${dataProfile.headImg})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height: "400px",
          margin: "0 auto",
          maxWidth: "1920px",
        }}
      ></Box>
      <Container disableGutters maxWidth="xl">
        <Box
          sx={{
            margin: "0 auto",
            p: ".5rem .5rem 5rem calc(18rem + .8vw)",
            position: "relative",
          }}
          flexDirection="column"
        >
          {" "}
          <img
            unselectable="on"
            className="unselectable"
            src={dataProfile.headImg}
            style={{
              filter:
                "blur(8rem) brightness(100%) saturate(200%) opacity(60%) ",
              width: "100%",
              objectPosition: "50% 50%",
              height: "420px",
              objectFit: "cover",
              position: "absolute",
              top: "-400px",
              left: 0,
              contentVisibility: "auto",
              loading: "lazy",
              zIndex: -1,
            }}
            crossOrigin="anonymous"
            onError={(e) => {
              e.target.src = defaultImg;
              e.target.style.backgroundColor = "rgba(255,255,255,0.3)";
              e.target.onerror = null;
            }}
          />
          <img
            className="unselectable"
            src={dataProfile.avatar}
            style={{
              width: "16rem",
              position: "absolute",
              top: "calc(-50% - 2.5rem)",
              left: "1.5%",
              borderRadius: "50%",
              padding: ".3rem",
              border: `0px solid transparent`,
              background: `linear-gradient(to top, ${colors.redAccent[500]} 0%, ${colors.blueAccent[500]} 100%) no-repeat `,
              backgroundSize: "100% 100%",
              backgroundPosition: "-5% -5%",
              backgroundClip: "border-box",
              boxSizing: "border-box",
            }}
          />{" "}
          <Box
            justifyContent="space-between"
            display="flex"
            alignItems="center"
            flexDirection="row"
          >
            <Typography variant="h1" color="primary" component="h3">
              {dataProfile.name}
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <a
                href="https://discord.com/users/1126684688564621332"
                target="_blank"
                style={{
                  display: "flex",
                  borderRadius: "50%",
                  padding: 0,
                }}
              >
                <img
                  src={Icon}
                  className="unselectable"
                  style={{ width: "3rem" }}
                />
              </a>
              <a
                href="https://www.joyland.ai/profile?userId=8Ad2r"
                target="_blank"
              >
                <Button
                  sx={{
                    p: ".8rem 1.8rem",
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
                  <Typography sx={{}} variant="h5">
                    GO TO JOYLAND
                  </Typography>
                  <span
                    style={{
                      position: "absolute",
                      top: "-4.5%",
                      left: "-1.5%",
                      right: 0,
                      bottom: 0,
                      borderRadius: "4px",
                      height: "109%",
                      width: "103%",
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
            {formatLikes(sumLikes())} Likes
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
