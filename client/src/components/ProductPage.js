import React from 'react';
import map from './mapsAPI/maps';
import { useParams } from 'react-router-dom';
import {Button} from '@material-ui/core';
import Header from './Header';
import ProductDetail from './Products/ProductDetail';
import DeleteProduct from './Products/ProductDelete';
import Footer from './Footer';




const ProductPage = () => {
    const { id } = useParams();
    const deleteProduct = (id) => {
    console.log('delete');
     {
      DeleteProduct(id)
        .then((response) => {
          console.log(response.message);
        })

    }
  };
    return (

        <div id="bod">
        <Header />
                
                <div className="card">
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

export default ProductPage