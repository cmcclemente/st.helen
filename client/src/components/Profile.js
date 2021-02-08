import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <form >
           <body>
                <div className="card">
                    <img src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg" alt="User Profile" width="100%"/>
                    <h1>User Name</h1>
                    <p className="price">Items Sold:  <br />Purchases: </p>
                    <p>The Users Bio if they choose to have one</p>
                    <p><button>Report(for removeal)</button></p>
                </div>
            </body>
        </form>
    )
}

export default Profile

