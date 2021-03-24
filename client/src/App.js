import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';
import Profile from './components/Profile';
import ChatPage from './components/ChatPage';
import UserAdmin from './components/UserAdmin';
import UploadProduct from './components/UploadProduct';
import ProtectedRoute from './auth/protected-route';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className="App">

              <Header />
              <Main />
              <Footer />

            </div>
          </Route>
   
          <Route exact path="/UploadProduct"
            render={(props) =>
              <UploadProduct />}
          />


          <Route exact path="/UserAdmin"
            render={(props) =>
              <UserAdmin />}
          />

          <ProtectedRoute exact path="/profile"
            component={Profile}
          />

          <Route
            exact
            path="/ProductPage/:id"
            render={(props) =>
              <ProductPage />
            } />

          <Route
            exact
            path="/ChatPage"
            render={(props) =>
              <ChatPage />
            } />
            
        </Switch>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
