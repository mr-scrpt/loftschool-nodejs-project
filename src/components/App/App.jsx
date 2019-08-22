import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CssBaseline, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import theme from "./../../theme";
import AppHeader from "./AppHeader";
import Auth from "../Auth";
import News from '../News';
const styles = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh"
  },
  container: {
    flex: "1 1 100%",
    display: "flex",
    flexDirection: "column"
  }
});

function App({ classes }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className={classes.root}>
          <AppHeader />
          <Box className={classes.container}>
              <Switch>
                <Route path="/" exact component={Auth} />
                <Route path="/news" component={News}/>
              </Switch>
          </Box>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
