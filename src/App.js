import './App.css';
import Heder from './components/Heder';
import Shop from './components/Heder-component/Shop/Shop';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import Productdetale from './components/Productdetale/Productdetale';
function App() {
  return (
    <div>
      <Heder></Heder>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <Productdetale></Productdetale>
          </Route>
          <Route path="*">
          <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
