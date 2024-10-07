import { ThemeProvider } from "@emotion/react";
import { ColorModeContext, useMode } from "./theme";
import { Box, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { useEffect } from "react";
function App() {
  const [theme, colorMode] = useMode();

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
