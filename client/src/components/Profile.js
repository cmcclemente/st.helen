import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';

const Profile = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user;
    return (
        <form >
           <body>
                <div className="card">
                    <img src={picture} alt="User Profile" width="100%"/>
                    <h1>{name}</h1>
                    <p className="price">Items Sold:  <br />Purchases: </p>
                    <p>The Users Bio if they choose to have one</p>
                    <p><button>Report(for removeal)</button></p>
                </div>
            </body>
            {JSON.stringify(user, null, 2)}
        </form>
        
    )
}

export default Profile

