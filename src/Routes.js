import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Loading, Footer } from "./components/";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const AboutLazy = lazy(() => import("./pages/About/About"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={LazyHome} />
          <Route exact path="/about" component={AboutLazy} />
        </Switch>
      </Suspense>
      <Footer
        email="hi@seathustler.com"
        links={[
          {
            to: "cheap",
            name: "Cheap Flights",
          },
          {
            to: "save",
            name: "Save Up to $550",
          },
          {
            to: "members",
            name: "Members Love Us",
          },
          {
            to: "about",
            name: "About Us",
          },
        ]}
        copyright="@ 2020 SeatHustler.com"
      />
    </Router>
  );
}

export default Routes;
