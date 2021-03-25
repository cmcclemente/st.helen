import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import ProductList from "./ProductList";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,

        color: 'black',

        width:'700px',
        height:'780px',
    },
    
  featuredTitle: {
    margin: theme.spacing(1),
  }
}));

export default function ProductContainer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item className={classes.featuredTitle}>
            <Typography variant="h3">Products</Typography>
        </Grid>
        <ProductList products={props.products}/>
      </Grid>
    </div>
  );
}