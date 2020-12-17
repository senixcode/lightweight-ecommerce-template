import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {
  FormControl,
  Grid,
  Hidden,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { shortString } from "../../helper/shortString";
import json2mq from "json2mq";
import _ from "lodash";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxHeight: 200,
  },

  content: {
    flex: "1 0 auto",
    alignItems: "center",
    alignContent: "center",
  },
  cover: {
    minWidth: 180,
    minHeight: 150,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  margin: {
    flex: "1",
    marginLeft: theme.spacing(1),
  },
}));

export const CardCart = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const matches = useMediaQuery(
    json2mq({
      maxWidth: 518,
    })
  );
  const title = () => {
    if (matches) {
      return shortString(props.title, 55);
    } else {
      return props.title;
    }
  };
  const handlePushDetail = () => {
    history.push(`/product/${props.id}`);
  };
  const arrayPropsQuantity = _.range(props.quantity);

  return (
    <Card className={classes.root}>
      <Hidden smDown>
        <CardMedia
          className={classes.cover}
          image={props.image}
          title={props.title}
        />
      </Hidden>
      <div className={classes.details}>
        <CardContent>
          <Grid container direction="column">
            <Grid item>
              <Typography component="p" variant="body1">
                <Link onClick={handlePushDetail}>{title()}</Link>
              </Typography>
            </Grid>
            <Grid item container direction="row" spacing={2}>
              <Grid item>
                <FormControl>
                  <InputLabel id="select-qty">Qty</InputLabel>
                  <Select id="select-qty" value={props.quantity}>
                    {arrayPropsQuantity.map((number) => {
                      number = number + 1;
                      return (
                        <MenuItem key={number} value={number}>
                          {number}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item container direction="row" spacing={2}>
              <Grid item>
                <Typography color="textSecondary">Price:</Typography>
              </Grid>
              <Grid item>
                <Typography color="textSecondary">{props.price}</Typography>
              </Grid>
            </Grid>
            <Grid item container direction="row" spacing={2}>
              <Grid item>
                <Typography color="textSecondary">Total:</Typography>
              </Grid>
              <Grid item>
                <Typography color="textSecondary">{props.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </div>
    </Card>
  );
};
