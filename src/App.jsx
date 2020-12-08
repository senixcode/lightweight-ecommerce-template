import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Navbar } from "./components/organisms/Navbar";

export const App = () => {
  return (
    <>
      {/*CssBaseline: normalize css */}
      <CssBaseline />
      <Navbar />
    </>
  );
};
