import React from 'react';



const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <span className="container">
            
    <input id="searchBar"
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search for something cool!!"}
     onChange={(e) => setKeyword(e.target.value)}
    />

  
    <a href="/Signup">Sign-up</a>
    <a href="/login">Log-in</a>
    <a href="/ChatPage">Chat with Team</a>
    <a href="/about">About-us</a>
    </span>
  );
}

export default SearchBar