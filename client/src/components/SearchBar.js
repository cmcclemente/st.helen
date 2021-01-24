import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input id="searchBar"
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search for something cool!!"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar