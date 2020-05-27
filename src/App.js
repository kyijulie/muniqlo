import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MenuBar from "./components/MenuBar/MenuBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainCenter/MainContent";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <MenuBar />
        <Switch>
          <Route exact path="/" component={MainContent} />
          {/* <Route path="/project/:id" component={ProjectDetails} /> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="/signup" component={SignUp} />
          <Route path="/signup" component={SignUp} /> */}
          {/* <Route path="/create" component={CreateProject} /> */}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
