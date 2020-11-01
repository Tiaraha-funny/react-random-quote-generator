import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import QuoteDetails from "./QuoteDetails";
import RandomQuotes from "./RandomQuotes";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/authors/:authorName">
            <QuoteDetails />
          </Route>
          <Route path="/">
            <RandomQuotes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
