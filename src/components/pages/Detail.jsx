import React, { useMemo, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getProductById } from "../../helper/getProductById";

import { Divider, Grid, Typography } from "@material-ui/core";
import { CardMediaCustom } from "../molecules/CardMediaCustom";
import { CardContentCustom } from "../molecules/CardContentCustom";
import { SectionShoppingCart } from "../organisms/SectionShoppingCart";
import { HoverRating } from "../organisms/HoverRating";
import currencyFormatter from "currency-formatter";
import { shortString } from "../../helper/shortString";
import { ButtonBack } from "../molecules/ButtonBack";
export const Detail = ({ history }) => {
  const { id } = useParams();
  const [slice, setSlice] = useState(true);
  const descriptionLimit = 250;
  const product = useMemo(() => getProductById(id), [id]);
  if (!product) {
    return <Redirect to="/" />;
  }
  const handleShowDescription = () => {
    setSlice(!slice);
  };

  const descriptionHardCode = `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
        quibusdam. Illo eum, eligendi odit doloremque magnam, ad totam
        architecto aspernatur dolores quos similique perspiciatis sequi
        asperiores. Voluptatum sapiente atque nesciunt. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Totam aspernatur quod blanditiis
        repudiandae facere odio distinctio debitis ducimus doloribus natus qui
        error voluptate nemo nam, laborum voluptatibus vitae eaque minus. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Qui, magni
        distinctio commodi vel sit dicta asperiores iure non, eveniet impedit
        consectetur dolore architecto suscipit reiciendis quidem nisi aliquid
        expedita illum?
  `;
  const description = (
    <>
      <HoverRating scord={product.scored} />
      <Divider />
      <p>{currencyFormatter.format(product.price, { code: "USD" })}</p>
      <Typography variant="overline">
        {slice
          ? shortString(descriptionHardCode, descriptionLimit)
          : descriptionHardCode}
      </Typography>
      <p onClick={handleShowDescription}>
        {slice ? "show more" : " show less"}
      </p>
    </>
  );

  const propsCardContenCustom = {
    title: product.title,
    description,
  };
  const propsCardMediaCustom = {
    alt: product.title,
    height: "auto",
    src: product.image,
    title: product.title,
    zoom: true,
  };

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
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
      <ButtonBack history={history} />
    </Grid>
  );
};
