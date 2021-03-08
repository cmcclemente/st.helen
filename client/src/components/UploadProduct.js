import React from 'react';
import Header from './Header';
import Footer from './Footer';

const UploadProduct = () => {
    return (
        <div>
            <Header />
            <form>
                <body>
                    <h1 class="center">Upload A Product to Sell</h1>
                
                    <input class="center" type="file" id="myFile" name="filename"/>
                    <input class="center"type="submit"/>
            
                    <div className="center">
                        <p>Description</p>
                        <p>price: </p>
                        <p>quality</p>
                    </div>
                </body>
            </form>
            <Footer />
        </div>
      );
}

export default UploadProduct