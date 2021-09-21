import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "./theme";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/"></Route>
            </Switch>
          </AppBody>
        </Router>
      </ThemeProvider>
    </div>
  );
}

const AppBody = styled.div``;

export default App;
