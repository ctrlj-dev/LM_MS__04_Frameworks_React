import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyfilterContextProvider } from "../components/member_search_component";
import { LoginPage } from "../views/login";
import { ListPage,  } from "../views/list";
import { DetailPage } from "../views/detail";

export const App = () => {
  return (
    <Router>
      <Switch>
        <MyfilterContextProvider>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/list/">
            <ListPage />
          </Route>
          <Route path="/detail/:id">
            <DetailPage />
          </Route>
        </MyfilterContextProvider>
      </Switch>
    </Router>
  );
};
