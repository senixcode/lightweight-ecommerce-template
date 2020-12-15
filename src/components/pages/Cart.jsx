import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { CardCart } from "../organisms/CardCart";
import { SectionBuy } from "../organisms/SectionBuy";

export const Cart = () => {
  // const [carts, setCarts] = useState([]);
  const { get } = useLocalStorage();
  const carts = get("cart") ? JSON.parse(get("cart")) : [];
  return (
    <Container fixed>
      <Grid container direction="column" spacing={1}>
        <Typography variant="h4">Shopping Cart</Typography>

        <Grid item container direction="row" spacing={1}>
          <Grid item container direction="column" spacing={0} xs={12} md={10}>
            {carts.length > 0 &&
              carts.map((cart) => (
                <Grid
                  item
                  key={cart.id}
                  xs={12}
                  style={{ marginBottom: "8px" }}
                >
                  <CardCart {...cart} />
                </Grid>
              ))}
          </Grid>
          <Grid item xs={12} md={2}>
            <SectionBuy />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
