import React from 'react';
import ProductProvider from "./Products/ProductProvider"




const Main = () => {
    return (
        <div className="row">
            <main>
            <div id="content">
            <ProductProvider />
            </div>
        </main>
        </div>
    )
}

export default Main


