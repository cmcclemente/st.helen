import React, { Component } from 'react';
import './Profile.css'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="item">
                    <img src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg" alt="this product" width="25%" />
                    <span className="caption">Jane Doe</span>
                </div>

                <div className="item">
                    <ul>
                        <li>Items Sold: 4 </li>
                        <li>Purchases: 2</li>
                    </ul>
                </div>

                <div>
                    <br />
                    Loction place holder
                </div>

            </div>
        );
    }
}


