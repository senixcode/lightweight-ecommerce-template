import React from "react";
import { Divider, fade, Grid, Hidden, makeStyles } from "@material-ui/core";
import TestData from "../../helper/TestData";
import { CardProduct } from "../organisms/CardProduct";
import { SectionCategories } from "../organisms/SectionCategories";
const useStyles = makeStyles((theme) => ({
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
export const Product = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center">
      <Grid container spacing={1} item xs={12} lg={10}>
        {TestData.map((resul) => (
          <Grid item key={resul.id}>
            <CardProduct {...resul} />
          </Grid>
        ))}
      </Grid>
      <Hidden lgUp>
        <div className={classes.spcing} />
      </Hidden>
      <Divider orientation="vertical" flexItem />
      <Grid
        container
        item
        spacing={1}
        xs={12}
        lg={2}
        justify="center"
        // className={classes.borderSectionCategory}
      >
        <Grid>
          <SectionCategories />
        </Grid>
      </Grid>
    </Grid>
  );
};
