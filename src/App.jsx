import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { Navbar } from "./components/organisms/Navbar";
import TestData from "./helper/TestData.json";
import { Main } from "./components/pages/Main";
import { Test } from "./components/pages/Test";
export const App = () => {
  return (
    <>
      {/*CssBaseline: normalize css */}
      <CssBaseline />
      <Navbar search={TestData.search} />
      <Grid container>
        <Grid container item xs={11}>
          {TestData.result.map((resul) => (
            <Main key={resul.id} {...resul} />
          ))}
        </Grid>
        <Grid item xs>
          <Test></Test>
        </Grid>
      </Grid>
    </>
  );
};
