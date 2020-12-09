import React from "react";
import { CssBaseline, fade, Grid, Hidden, makeStyles } from "@material-ui/core";
import { Navbar } from "./components/organisms/Navbar";
import TestData from "./helper/TestData.json";
import { Main } from "./components/pages/Main";
import { Test } from "./components/pages/Test";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  spcing: {
    margin: theme.spacing(2),
  },
  borderSectionCategory: {
    flexDirection: "row",
    // justifyItems: "center",
    // alignItems: "cemter",
    marginLeft: theme.spacing(2),
    justifyContent: "flex-start",
    [theme.breakpoints.up("lg")]: {
      marginLeft: 0,
      justifyContent: "center",
      borderLeftColor: fade(theme.palette.common.black, 0.2),
      borderLeftStyle: "solid",
      borderRightWidth: "thin",
    },
  },
}));
export const App = () => {
  const classes = useStyles();
  return (
    <>
      {/*CssBaseline: normalize css */}
      <CssBaseline />
      <Navbar search={TestData.search} />
      <div className={classes.root}>
        <Grid container direction="row" justify="center">
          <Grid container spacing={1} item xs={12} lg={10}>
            {TestData.result.map((resul) => (
              <Grid item key={resul.id}>
                <Main {...resul} />
              </Grid>
            ))}
          </Grid>
          <Hidden lgUp>
            <div className={classes.spcing} />
          </Hidden>
          <Grid
            container
            item
            spacing={1}
            xs={12}
            lg={2}
            className={classes.borderSectionCategory}
          >
            <Grid>
              <Test></Test>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
