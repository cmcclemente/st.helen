import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
    root: {
        
        color: 'yellow',
        width:'560px',
        height:'760px',
    }
}));
export default function ProductList(props) {
const classes = useStyles();  
    return (
    <div className={classes.root}>
    <Grid container item direction="row" spacing={1}>
      {props.products.map((product) => (
        <Grid key={product.id} item xs={2}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
</div>
  );
}