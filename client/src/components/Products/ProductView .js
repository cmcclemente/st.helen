import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0',
    background: 'green',
    display:'block',
  },
}));

export default function ProductView(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <h2>{props.product.name}</h2>
          <p>{props.product.price}</p>
         
        </CardContent>
      </CardActionArea>
    </Card>
  );
}