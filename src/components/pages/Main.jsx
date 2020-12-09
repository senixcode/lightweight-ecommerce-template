import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
export const Main = (props) => {
  const classes = useStyles();
  const shortString = (value) => {
    if (value.length > 70) {
      return value.slice(0, 73) + " ...";
    }
    console.log(value.length);
    return value;
  };
  console.log({ props });
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          height="250"
          //   image="/static/images/cards/contemplative-reptile.jpg"
          src={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {shortString(props.title)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};
