import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MenuBar from "./components/MenuBar/MenuBar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainCenter/MainContent";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import AuthRoute from "./components/NavBar/AuthRoute";
import ScrollToTop from "./components/Assets/ScrollToTop";
import ProductPage from "./components/ProductPage/ProductPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ScrollToTop />
          <NavBar />
          <MenuBar />
          <Switch>
            <AuthRoute path="/home" render={MainContent} type="private" />{" "}
            <AuthRoute path="/login" type="guest">
              <Login />
            </AuthRoute>
            {/* <AuthRoute path="/my-account" type="private">  */}
            {/* <MyAccount /> */}
            {/* </AuthRoute> */}
            <Route exact path="/" render={MainContent} />
            {/* <Route exact path="/">
              {this.state.loggedIn ? <Redirect to="/home" /> : <MainContent />}
            </Route> */}
            {/* <Route path="/login" component={Login} /> */}
            <Route path="/register" component={Register} />
            <Route
              path="/women-chiffon-pleated-long-skirt-online-exclusive"
              component={() => <ProductPage clothesId="425371" />}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
