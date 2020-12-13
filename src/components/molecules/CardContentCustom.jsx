import React from "react";
import { CardContent, Typography } from "@material-ui/core";

export const CardContentCustom = ({ title, Description }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary" component="p">
        {Description && <Description />}
      </Typography>
    </CardContent>
  );
};
