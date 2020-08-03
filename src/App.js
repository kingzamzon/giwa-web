import React from "react";
import "./App.css";
import FooterComponent from "./components/footerComponent";
import HeaderComponent from "./components/headerComponent";
import HomePage from "./pages/home";
import AboutUs from "./pages/aboutus";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <div className="App"> */}
        <div id="preloader">
          <div className="mosh-preloader"></div>
        </div>
        <HeaderComponent />
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/shop" component={HomePage} />
          </Switch>
        </div>
      {/* </div> */}
      <FooterComponent />
    </div>
  );
}

export default App;
