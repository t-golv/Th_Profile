import { ThemeProvider } from "@emotion/react";
import { ColorModeContext, useMode } from "./theme";
import { Box, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { useEffect } from "react";
function App() {
  const [theme, colorMode] = useMode();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en",
      DNT: "1",
      Fingerprint: "840cf1fc79e3d7bb243aeb93ed5757f3",
      Origin: "https://www.joyland.ai",
      Referer: "https://www.joyland.ai/",
    },
  };
  // const {
  //   request: requestProfile,
  //   data: dataProfile,
  //   loading: loadingProfile,
  //   error: errorProfile,
  // } = useFetch();
  useEffect(() => {
    // requestProfile(
    //   `https://api.joyland.ai/profile/info?userId=8Ad2r`,
    //   options
    // ).finally();
  }, []);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box component="main">
          <Outlet />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
