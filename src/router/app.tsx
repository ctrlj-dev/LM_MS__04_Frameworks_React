import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyfilterContextProvider } from "../components/member-search/member-search";
import { MyfilterContextProviderRick } from "../components/member-search/member-search-rick";
import { LoginPage } from "../views/login";
import { ListPage } from "../views/list";
import { DetailPage } from "../views/detail";
import { RickMortyList } from "../views/rickMortyList";
import { DetailRickMorty } from "../views/detailRickMorty";
import { FooterLayout } from "../layout/footer";

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
      <MyfilterContextProviderRick>
        <Route path="/rick-morty-list/">
          <RickMortyList />
        </Route>
        <Route path="/detail-rick-morty/:id">
          <DetailRickMorty />
        </Route>
      </MyfilterContextProviderRick>
      <FooterLayout />
    </Router>
  );
};
