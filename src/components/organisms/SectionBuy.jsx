import React, { useContext } from "react";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";

import ShopIcon from "@material-ui/icons/Shop";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { MyContext } from "../../MyContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
export const SectionBuy = () => {
  const { country } = useContext(MyContext);
  const { get } = useLocalStorage();
  const validateCountry = () => {
    let countryCode = get("country_code");
    if (countryCode) {
      return " " + countryCode;
    } else {
      return " " + country;
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="default"
              style={{ display: "flex", width: "100%" }}
              endIcon={<ShopIcon />}
            >
              Buy Now
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              <LocationOnIcon fontSize="small" />
              Deliver to
              {validateCountry()}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
