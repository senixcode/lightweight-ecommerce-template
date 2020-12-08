import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { App } from "../App";

export const SwitchRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  );
};
