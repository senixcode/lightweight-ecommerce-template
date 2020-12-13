import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getProductById } from "../../helper/getProductById";

import { Button, Grid } from "@material-ui/core";
import { CardMediaCustom } from "../molecules/CardMediaCustom";
import { CardContentCustom } from "../molecules/CardContentCustom";

export const Detail = ({ history }) => {
  const { id } = useParams();
  const product = useMemo(() => getProductById(id), [id]);
  if (!product) {
    return <Redirect to="/" />;
  }
  const Description = () => (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
        quibusdam. Illo eum, eligendi odit doloremque magnam, ad totam
        architecto aspernatur dolores quos similique perspiciatis sequi
        asperiores. Voluptatum sapiente atque nesciunt.
      </p>
    </>
  );

  const propsCardContenCustom = {
    title: product.title,
    Description,
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
            style={{ margin: "1.5px" }}
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
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "black",
            maxHeight: "450px",
          }}
        >
          <CardMediaCustom {...propsCardMediaCustom} />
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          style={{ borderStyle: "solid", borderWidth: 1, borderColor: "black" }}
        >
          <CardContentCustom {...propsCardContenCustom} />
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          style={{ borderStyle: "solid", borderWidth: 1, borderColor: "black" }}
        >
          <h1>layout 3</h1>
        </Grid>
      </Grid>
    </Grid>
  );
};