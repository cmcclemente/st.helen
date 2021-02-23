import React from 'react';
import AuthNav from "./auth-nav";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
  return (
    <span className="container BarStyling">
      <a href="/UploadProduct">
        <img src="https://lh3.googleusercontent.com/proxy/RpOgIZ5n5E50nr-B2aJS2X4hhgavzYRrrHvRLd8Km-NIXxKoCGYPC6enN-cuaJd5RXFTIWuYXh3tq9jWC3WA020t-tdgVebVKRXQWk_rKwnM" alt="Product" width="120" height="35"/>
      </a>

      <input id="searchBar"
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"search for something cool!!"}
        onChange={(e) => setKeyword(e.target.value)}
      /> 
      <a href="/ChatPage">Chat with Team</a>
      <a href="/about">About-us</a>
      <a href="/UserAdmin">User-Control</a>
      <AuthNav />
    </span>
  );
}

export default SearchBar