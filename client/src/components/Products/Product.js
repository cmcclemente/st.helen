import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0',
    background: 'white',
    display:'block',
    color:'black',
    textDecoration:'none',
  },
}));

export default function Product(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <h2>{props.product.name}</h2>
          <p>{props.product.price}</p>
          <Link to={`/ProductPage/${props.product.id}`}>View Item</Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}