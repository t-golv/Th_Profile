import { Box, Tabs, Tab, Container } from "@mui/material";
import React from "react";
import PublicBots from "./PublicBots";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsContainer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Container disableGutters maxWidth="xl">
        <Tabs
          value={value}
          onChange={handleChange}
          // variant="fullWidth"
          aria-label="basic tabs example"
        >
          <Tab label="Public Bots" {...a11yProps(0)} />
        </Tabs>
      </Container>
      <CustomTabPanel value={value} index={0}>
        <PublicBots />
      </CustomTabPanel>
    </Box>
  );
}
