import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SignUp from './components/SignUp';
import React from 'react';


function App() {
  return (
    <div>
      <span>
        <SearchBar/>
      </span>
      
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App">
            
            <Header />
              <Main />
           
          </div>
        </Route>
        <Route
          exact
          path="/signup"
          render={(props) =>
            <SignUp />
          } />
      </Switch>
    </BrowserRouter>
    
        <Footer/>
      
    </div>
  );
}

export default App;
