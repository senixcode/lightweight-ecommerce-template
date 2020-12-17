import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getProductById } from "../../helper/getProductById";

import { Box, Button, Divider, Grid } from "@material-ui/core";
import { CardMediaCustom } from "../molecules/CardMediaCustom";
import { CardContentCustom } from "../molecules/CardContentCustom";
import { SectionShoppingCart } from "../organisms/SectionShoppingCart";
import { HoverRating } from "../organisms/HoverRating";
import currencyFormatter from "currency-formatter";
export const Detail = ({ history }) => {
  const { id } = useParams();
  const product = useMemo(() => getProductById(id), [id]);
  if (!product) {
    return <Redirect to="/" />;
  }
  const description = (
    <>
      <HoverRating scord={product.scored} />
      <Divider />
      <Box style={{ marginTop: "1em" }}>
        {currencyFormatter.format(product.price, { code: "USD" })}
      </Box>
      <Box style={{ marginTop: "4px" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
        quibusdam. Illo eum, eligendi odit doloremque magnam, ad totam
        architecto aspernatur dolores quos similique perspiciatis sequi
        asperiores. Voluptatum sapiente atque nesciunt.
      </Box>
    </>
  );

  const propsCardContenCustom = {
    title: product.title,
    description,
  };
  const propsCardMediaCustom = {
    alt: product.title,
    height: "100%",
    src: product.image,
    title: product.title,
    zoom: true,
  };
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <Grid container direction="row" justify="flex-end">
        <Grid item>
          <Button
            variant="text"
            onClick={() => handleReturn()}
            color="default"
            style={{ margin: "1.2px" }}
          >
            Return
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center">
        <Grid
          item
          xs={12}
          lg={5}
          style={{
            maxHeight: "450px",
          }}
        >
          <CardMediaCustom {...propsCardMediaCustom} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <CardContentCustom {...propsCardContenCustom} />
        </Grid>
        <Grid item xs={12} lg={2}>
          <SectionShoppingCart {...product} />
        </Grid>
      </Grid>
    </Grid>
  );
};
