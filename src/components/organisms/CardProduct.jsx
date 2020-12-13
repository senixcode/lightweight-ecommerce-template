import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useHistory } from "react-router-dom";
import { CardContentCustom } from "../molecules/CardContentCustom";
import { shortString } from "../../helper/shortString";
import { CardMediaCustom } from "../molecules/CardMediaCustom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    // margin: theme.spacing(2, 1),
    [theme.breakpoints.down("md")]: {
      maxWidth: 300,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400,
    },
  },
}));
export const CardProduct = (props) => {
  const classes = useStyles();
  let history = useHistory();
  let title = shortString(props.title);

  const propsCardMediaCustom = {
    alt: props.title,
    height: "250",
    src: props.image,
    title: props.title,
  };
  const handlePushDetail = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <Card className={classes.root} onClick={() => handlePushDetail(props.id)}>
      <CardActionArea>
        <CardMediaCustom {...propsCardMediaCustom} />
        <CardContentCustom title={title} />
      </CardActionArea>
    </Card>
  );
};
