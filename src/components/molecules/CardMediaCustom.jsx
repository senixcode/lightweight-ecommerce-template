import React, { useState } from "react";
import { CardMedia, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  zoomImg: {
    [theme.breakpoints.up("lg")]: {
      transitionDuration: "0.4s",
      transform: "translate(200px) scale(1.4,1.4)",
    },
  },
}));
export const CardMediaCustom = ({ alt, height, src, title, zoom = false }) => {
  const [hovered, setHovered] = useState(false);
  const classes = useStyles();
  const validate = () => {
    if (zoom & hovered) {
      return classes.zoomImg;
    }
    return "";
  };
  return (
    <CardMedia
      component="img"
      alt={alt}
      height={height}
      src={src}
      title={title}
      onMouseOut={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
      className={validate()}
    />
  );
};
