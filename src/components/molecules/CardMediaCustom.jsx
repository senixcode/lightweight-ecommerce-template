import React, { useState } from "react";
import { CardMedia, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  zoomImg: {
    position: "relative",
    zIndex: 100,
    [theme.breakpoints.up("lg")]: {
      transitionDuration: "0.5s",
      transform: "translate(200px) scale(1.4,1.4)",
    },
  },
  transition: {
    [theme.breakpoints.up("lg")]: {
      position: "relative",
      zIndex: 100,
      transitionDuration: "0.5s",
    },
  },
}));
export const CardMediaCustom = ({ alt, height, src, title, zoom = false }) => {
  const [hovered, setHovered] = useState(false);
  const classes = useStyles();
  const validate = () => {
    if (zoom & hovered) {
      return classes.zoomImg;
    } else if (zoom & !hovered) {
      return classes.transition;
    } else {
      return "";
    }
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
