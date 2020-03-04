import React from "react";
import "./App.css";
import NavigationHeader from "./components/NavigationHeader";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./containers/MainPage";
import { Container,CssBaseline } from '@material-ui/core'
import About from "./containers/BookList";

function App() {
  return (
    <Router>
      <CssBaseline/>
      <NavigationHeader />
      <Container maxWidth="xl">
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/books">
          <About />
        </Route>
      </Switch>
      </Container>
    </Router>
  );
}

export default App;
