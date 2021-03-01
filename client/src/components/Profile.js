import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';
import Map from './mapsAPI/maps';

const Profile = () => {
    const { user } = useAuth0();
    const { name, picture} = user;
    return (
        <form >
                <div className="card">
                    <img src={picture} alt="User Profile" width="100%"/>
                    <h1>{name}</h1>
                    <p className="price">Items Sold:  <br />Purchases: </p>
                    <p>The Users Bio if they choose to have one</p>
                    <p><button>Report(for removeal)</button></p>
                </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}><Map /></div>    
            
            {JSON.stringify(user, null, 2)}
        </form>
        
    )
}

export default Profile

