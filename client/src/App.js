import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';
import About from './components/About';
import Profile from './components/Profile';
import ProductDetail from './components/Products/ProductDetail';
import ChatPage from './components/ChatPage';
import UserAdmin from './components/UserAdmin';
import UploadProduct from './components/UploadProduct';
import ProtectedRoute from './auth/protected-route';

function App() {
  return (
    <div>
      
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

          <Route exact path="/about"
            render={(props) =>
              <About />}
          />

          <ProtectedRoute exact path="/profile"
            component={Profile}
          />

          <Route
            exact
            path="/ProductPage/:id"
            render={(props) =>
              <ProductDetail />
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
