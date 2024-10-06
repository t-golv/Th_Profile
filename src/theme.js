import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        // MODO DARK
        mainAccent: {
          100: "#A5ACBF",
          200: "#959DB3",
          300: "#858EA6",
          400: "#757F9A",
          500: "#444A5A",
          600: "#393E4B",
          700: "#2F323C",
          800: "#24262E",
          900: "#191A1F",
        },
        redAccent: {
          100: "#eba7be",
          200: "#E87098",
          300: "#E45A88",
          400: "#DF4579",
          500: "#DB3069",
          600: "#B72153",
          700: "#8B1A40",
          800: "#751636",
          900: "#520e25",
        },
        blueAccent: {
          100: "#BEACFC",
          200: "#A891FB",
          300: "#9376FA",
          400: "#7E5BF8",
          500: "#5CB8F8",
          600: "#5326F5",
          700: "#3F0CF2",
          800: "#380CD6",
          900: "#310BBB",
        },
        grey: {
          100: "#f9f9fb",
          200: "#f3f3f7",
          300: "#ededf2",
          400: "#e7e7ee",
          500: "#e1e1ea",
          600: "#b4b4bb",
          700: "#87878c",
          800: "#5a5a5e",
          900: "#2d2d2f",
        },
      }
    : {
        // MODO LIGHT
        mainAccent: {
          900: "#f6f6f9",
          800: "#ededf2",
          700: "#e4e4ec",
          600: "#dbdbe5",
          500: "#B5B5C9",
          400: "#9DA9C8",
          300: "#8E9BBE",
          200: "#7E8DB4",
          100: "#6E7FAA",
        },
        redAccent: {
          900: "#eba7be",
          800: "#E87098",
          700: "#E45A88",
          600: "#DF4579",
          500: "#FF52C9",
          400: "#B72153",
          300: "#8B1A40",
          200: "#751636",
          100: "#520e25",
        },
        blueAccent: {
          900: "#BEACFC",
          800: "#A891FB",
          700: "#9376FA",
          600: "#7E5BF8",
          500: "#5CB8F8",
          400: "#5326F5",
          300: "#3F0CF2",
          200: "#380CD6",
          100: "#310BBB",
        },
        grey: {
          900: "#f9f9fb",
          800: "#f3f3f7",
          700: "#ededf2",
          600: "#e7e7ee",
          500: "#e1e1ea",
          400: "#b4b4bb",
          300: "#87878c",
          200: "#5a5a5e",
          100: "#2d2d2f",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.redAccent[500],
            },
            secondary: {
              main: colors.blueAccent[400],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[300],
            },
            info: {
              main: colors.blueAccent[900],
              contrastText: colors.grey[100],
            },
            background: {
              default: colors.mainAccent[600],
              paper: colors.mainAccent[700],
              dark: colors.mainAccent[900] + "BB",
              light: colors.mainAccent[100],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.redAccent[500],
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            neutral: {
              dark: colors.grey[400],
              main: colors.grey[500],
              light: colors.grey[600],
            },
            background: {
              default: colors.mainAccent[800],
              paper: colors.mainAccent[900],
              dark: colors.mainAccent[900] + "BB",
              light: colors.mainAccent[100],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const savedMode = localStorage.getItem("ThemeMode");
  const [mode, setMode] = useState(savedMode ? savedMode : "light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          saveStorage(prev === "light" ? "dark" : "light");
          return prev === "light" ? "dark" : "light";
        });
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const saveStorage = (newMode) => {
    window.localStorage.setItem("ThemeMode", newMode);
  };
  return [theme, colorMode];
};
