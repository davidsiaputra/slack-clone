import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "./theme";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <Header handleDrawerToggle={handleDrawerToggle} />
          <AppBody>
            <Sidebar
              mobileOpen={mobileOpen}
              handleDrawerToggle={handleDrawerToggle}
            />
            <Switch>
              <Route path="/"></Route>
            </Switch>
          </AppBody>
        </Router>
      </div>
    </ThemeProvider>
  );
}

const AppBody = styled.div``;

export default App;
