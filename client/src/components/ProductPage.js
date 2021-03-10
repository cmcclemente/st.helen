import React from 'react';
import map from './mapsAPI/maps';

const ProductPage = () => {
    return (
        <form >
           <body>
                <h2 className="center">The Product you looked UP!!</h2>
                <div className="card">
                    <img src="https://media.wired.com/photos/5c9040ee4950d24718d6da99/16:9/w_2400,h_1350,c_limit/shoppingcart-1066110386.jpg" alt="this product" width="100%"/>
                    <h1>An item we are Selling :)</h1>
                    <p className="price">$1,000,000.00</p>
                    <a href="/profile">Sellers Profile</a>
                    <p>This is where I would hypothetically describe the said item and try to convince people to give their hard earned money to buy it, by spitting out a bunch of fancy shiny words at them. YAYYYY!!!</p>
                    <p><button>Add to Cart</button></p>
                    {/*<p><map /></p>*/}
                </div>
            </body>
        </form>
    )
}

export default ProductPage