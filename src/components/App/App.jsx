import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppHeader from "../AppHeader";
import { CssBaseline, Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./../../theme";
import { withStyles } from "@material-ui/core/styles";
const styles = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh"
  },
  container: {
    flex: "1 1 100%"
  }
});
const Test = () => <h1>Test</h1>;

function App({ classes }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <AppHeader />
        <Container className={classes.container}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Test} />
            </Switch>
          </BrowserRouter>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
