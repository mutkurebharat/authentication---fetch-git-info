import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// firebase

// import firebase from "firebase/app";
// import "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config/firebaseConfig";

// Components

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./Context/UserContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

// init firebase
initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
