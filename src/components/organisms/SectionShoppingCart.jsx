import React, { useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShopIcon from "@material-ui/icons/Shop";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { MyContext } from "../../MyContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
export const SectionShoppingCart = (props) => {
  const { country } = useContext(MyContext);
  const { get } = useLocalStorage();
  const validateCountry = () => {
    let countryCode = get("country_code");
    if (countryCode) {
      return countryCode;
    } else {
      return country;
    }
  };
  const handleAddToCart = () => {
    // console.log(props);
    // setCart((cart) => [...cart, props]);
    // console.log(cart);
  };
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <FormControl>
              <InputLabel id="select-qty">Qty</InputLabel>
              <Select id="select-qty" value={1}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="default"
              style={{ display: "flex", width: "100%" }}
              onClick={handleAddToCart}
              endIcon={<ShoppingCartIcon />}
            >
              Add to Cart
            </Button>
          </Grid>
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
            <Typography variant="body" color="textSecondary" gutterBottom>
              <LocationOnIcon fontSize="small" /> Deliver to
              {" " + validateCountry()}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
