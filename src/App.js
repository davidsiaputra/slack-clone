import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, styled } from "@mui/material";
import theme from "./theme";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <AppBody>
            <Header handleDrawerToggle={handleDrawerToggle} />
            <Sidebar
              mobileOpen={mobileOpen}
              handleDrawerToggle={handleDrawerToggle}
            />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </Router>
      </div>
    </ThemeProvider>
  );
}

const AppBody = styled("div")({
  display: "flex",
});

export default App;
