import React, { useState } from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { Navbar } from "./components/organisms/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { SwitchRouter } from "./Routers/SwitchRouter";
import { getCountry } from "./helper/getCountry";
import { MyContext } from "./MyContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(2),
    },
  },
}));
export const App = () => {
  const classes = useStyles();
  const [country, setCountry] = useState("");
  const { get, set } = useLocalStorage();
  get("country_code") === null &&
    getCountry().then((r) => {
      setCountry(r.country_code);
      set("country_code", r.country_code);
    });

  return (
    <MyContext.Provider value={{ country, setCountry }}>
      <Router>
        {/*CssBaseline: normalize css */}
        <CssBaseline />
        <Navbar search="laptop" />
        <div className={classes.root}>
          <SwitchRouter />
        </div>
      </Router>
    </MyContext.Provider>
  );
};
