import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import ProductView from './Product';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '50vw',
  },
  featureImage: {
    width: '15vw',
  },
});

export default function ProductDetail(props) {
    const classes = useStyles();
    const { id } = useParams();
    const [ product, setProductView ] = useState(null);
    console.log('k'+id);
  useEffect(() => {
    const config = {
      url: `http://localhost:5000/api/v1/products/${id}`,
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    }
    axios(config).then((response) => {
      setProductView(response.data)
    }).catch((err) => {
      console.log('error in ProductViewDetail useEffect');
    })
  }, [id]);

    if (product) {
      return (
                  <Grid container item className={classes.root}>
          <Grid container item className={classes.root} direction="row">
            <Grid item>
              
            </Grid>
            <Grid item>
              <Typography variant="h3">
                {product.name}
              </Typography>
              <Typography>
                {product.price}
              </Typography>
              <Typography>
                {product.available}
              </Typography>
            </Grid>
          </Grid>
          
        </Grid>
        );
    }
    return <div>Loading...</div>;
}