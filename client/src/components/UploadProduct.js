import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FileUploader from './Upload/FileUploader';

function UploadProduct() {
    
    return (
        <div>
            <Header />
           
               
                    
                    
                    <div className="center">
                    <FileUploader />
                    </div>
                
           
            <Footer />
        </div>
      );
}

export default UploadProduct