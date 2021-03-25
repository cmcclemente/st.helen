import React, {useState} from 'react';
import map from './mapsAPI/maps';
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {Button} from '@material-ui/core';
import Header from './Header';
import ProductDetail from './Products/ProductDetail';
import Footer from './Footer';
import axios from 'axios';


export default function ProductPage(props) {
    const { id } = useParams();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const deleteProduct = () => {
    const config = {
      url: `http://localhost:5000/api/v1/products/${id}`,
      method: "DELETE",
        };
    axios(config)
      .then((response) => {
        console.log('Deleted' );
        setSuccess(true);
      })
      .catch((err) => {
        alert("Whoops, something when wrong");
        setError(err);
      });
  }
    
    if (success) {
    return <Redirect to="/" />;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

    return (

        <div id="bod">
        <Header />

                <div className="card2">
                <h1 className="center">The Product you looked up!!</h1>
                <ProductDetail />

                    <Button
                        variant="contained">
                            Add to Cart
                    </Button>
                    <Button
                        variant="contained"
                        onClick={deleteProduct}>
                            Delete
                    </Button>

                <p><map /></p>

                </div>
                <Footer />
        </div>
    )
}