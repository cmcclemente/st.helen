import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';
import Map from './mapsAPI/maps';
import Header from './Header';
import Footer from './Footer';

const Profile = () => {
    const { user } = useAuth0();
    const { name, picture} = user;
    return (
        <form >
            <Header/>
                <div className="card">
                    <img src={picture} alt="User Profile" width="100%"/>
                    <h1>{name}</h1>
                    <p className="price">Items Sold:  <br />Purchases: </p>
                    <p>The Users Bio if they choose to have one</p>
                    <p><button>Report(for removeal)</button></p>
                    <div><Map /></div>
                </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}></div>    
            
            <Footer />
        </form>
        
    )
}

export default Profile

