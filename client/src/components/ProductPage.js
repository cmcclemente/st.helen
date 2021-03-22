import React from 'react';
import map from './mapsAPI/maps';
import Header from './Header';
import ProductDetail from './Products/ProductDetail';
import Footer from './Footer';

const ProductPage = () => {
    return (
        <form >
        <Header />
           <body>
                <h2 className="center">The Product you looked UP!!</h2>
                <div className="card">
                
                    <ProductDetail />
                    
                    <p><button>Add to Cart</button></p>
                    {/*<p><map /></p>*/}
                    
                </div>
                <Footer />
            </body>
        </form>
    )
}

export default ProductPage