import React, { useState } from "react";
import {
  Container,
  createMuiTheme,
  CssBaseline,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import { Navbar } from "./components/organisms/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { SwitchRouter } from "./Routers/SwitchRouter";
import { getCountry } from "./helper/getCountry";
import { MyContext } from "./MyContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(10),
  },
}));
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
export const App = () => {
  const classes = useStyles();
  const [country, setCountry] = useState("");
  const [cart, setCart] = useState(0);
  const { get, set } = useLocalStorage();
  get("country_code") === null &&
    getCountry().then((r) => {
      setCountry(r.country_code);
      set("country_code", r.country_code);
    });

  return (
    <ThemeProvider theme={theme}>
      <MyContext.Provider value={{ country, setCountry, cart, setCart }}>
        <Router>
          {/*CssBaseline: normalize css */}
          <CssBaseline />
          <Navbar search="laptop" />
          <Container className={classes.root}>
            <SwitchRouter />
          </Container>
        </Router>
      </MyContext.Provider>
    </ThemeProvider>
  );
};
