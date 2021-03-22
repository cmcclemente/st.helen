import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Typography, makeStyles, CardContent} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '50vw',
        minWidth: 275,  
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    featureImage: {
        width: '15vw',
    },
    title: {
    fontSize: 14,
  },
    pos: {
    marginBottom: 12,
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
             
             <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
          {product.name} 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {product.price}
        </Typography>
        <Typography variant="body2" component="p">
          <h3>Availabe: {product.available.toString()}</h3>
          <br />
        </Typography>
      </CardContent>
    
    </Card>
            );
    }
    return <div>Loading...</div>;
}
