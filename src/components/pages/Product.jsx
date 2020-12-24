import React, { useState } from "react";
import { Divider, fade, Grid, Hidden, makeStyles } from "@material-ui/core";
import TestData from "../../helper/TestData";
import { CardProduct } from "../organisms/CardProduct";
import { SectionCategories } from "../organisms/SectionCategories";
import _ from "lodash";
import { useLocalStorage } from "../../hooks/useLocalStorage";
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
  const { get, set } = useLocalStorage();

  let getCategories = () => get("categories");
  let getFilteredProducts = () => get("filtered-products");
  let filteredProductsLocalStorage = () =>
    JSON.parse(getFilteredProducts() || "[]");

  let categoriesLocalStorage = () => JSON.parse(getCategories() || "[]");
  const [products, setProducts] = useState(
    getFilteredProducts()
      ? filteredProductsLocalStorage().length > 0
        ? filteredProductsLocalStorage()
        : TestData
      : TestData
  );

  const filterProduct = () => {
    if (getCategories()) {
      _.map(categoriesLocalStorage(), (category) => {
        if (category.value) {
          let result = _.filter(TestData, function (product) {
            return product.category === category.key;
          });
          if (result.length > 0) {
            let filterProducts = filteredProductsLocalStorage();
            filterProducts = _.unionWith(filterProducts, result, _.isEqual);
            set("filtered-products", filterProducts);
            setProducts(filterProducts.length > 0 ? filterProducts : TestData);
          }
        } else {
          let filterProducts = filteredProductsLocalStorage();
          // console.log(category, "snx", filterProducts);
          if (filterProducts.length > 0) {
            _.remove(filterProducts, function (products) {
              return products.category === category.key;
            });

            set("filtered-products", filterProducts);
            setProducts(filterProducts.length > 0 ? filterProducts : TestData);
          }
        }
      });
    }
  };
  return (
    <Grid container direction="row" justify="center">
      <Grid container spacing={1} item xs={12} lg={10}>
        {products.length > 0 &&
          products.map((result) => (
            <Grid item key={result.id}>
              <CardProduct {...result} />
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
          <SectionCategories
            filterProduct={filterProduct}
            products={TestData}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
