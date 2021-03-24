import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FileUploader from './Upload/FileUploader';

function UploadProduct() {
    
    return (
        <div>
            <Header />
           
                <body>
                    <h1>Upload A Product to Sell</h1>
                    <FileUploader />
                    
                    <div className="center">
                        
                    </div>
                </body>
           
            <Footer />
        </div>
      );
}

export default UploadProduct