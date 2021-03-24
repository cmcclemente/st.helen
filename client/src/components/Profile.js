import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';
import Map from './mapsAPI/maps';
import Header from './Header';
import Footer from './Footer';

const Profile = () => {
    const { user } = useAuth0();
    const { name, picture } = user;
    return (
        <form style={{backgroundColor:'black'}}>
            <Header />
            <div >
                <div className="carder">
                <div className="card">
                    <br />
                    <img src={picture} alt="User Profile" width="100%" />
                    <h1>{name}</h1>
                    <p className="price">Items Sold:  <br />Purchases: </p>
                    <p>I am a big rugby fan as well as cycling</p>
                    <br/>
                    <p><button><strong>Report</strong></button></p>
                    <br />
                    <Map />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                
                </div>
                
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}></div>

            <Footer />
        </form>
        
    )
}

export default Profile

