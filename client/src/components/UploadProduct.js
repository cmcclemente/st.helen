import React from 'react';




const UploadProduct = () => {

    return (
        <form>
            <body /*action="/action_page.php"*/>
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
       
      );
}

export default UploadProduct