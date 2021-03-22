import React from 'react';
import {Link} from 'react-router-dom';
import AuthNav from "./auth-nav";
import logo from '../images/Logo.png';

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
  return (
      
      <nav id="navigation">
      <ul>
      <li id="logo"><Link to={`/`}><img src={logo} alt="Logo" width="100" height="75"/></Link></li>
      <li><input id="searchBar"
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"search for something cool!!"}
        onChange={(e) => setKeyword(e.target.value)}
      /></li>
        <li><Link to={`/ChatPage`}>Chat with Team</Link></li>
        <li><Link to={`/UserAdmin`}>User-Control</Link></li>
        <li><Link to={`/UploadProduct`}>Upload Product</Link>  </li>
        <li><AuthNav /></li>
            </ul>
        </nav>
        
  );
}

export default SearchBar